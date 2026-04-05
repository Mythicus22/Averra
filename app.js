if(process.env.NODE_ENV != "production"){ // this will check if the environment is not production, then it will load the .env file production is when we have deployed the application and we don't want to expose our environment variables to everyone so we dont use them in production phase
    require('dotenv').config() // this will load the environment variables from the .env file into process.env
}
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
const ExpressError=require("./utils/ExpressError.js")
const session=require("express-session")
const MongoStore=require("connect-mongo") 
const flash=require("connect-flash")
const passport= require("passport")
const LocalStrategy= require("passport-local")
const User= require("./models/user.js")
const {limiter}=require("./middleware.js") 

const listingRouter= require("./routes/listing.js")
const reviewRouter= require("./routes/review.js")
const userRouter= require("./routes/user.js")

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.engine("ejs",ejsMate)
app.use(limiter) // this will limit the number of requests to 100 per 15 minutes for all routes

const dbUrl=process.env.ATLASDB_URL
//server connection
const port = process.env.PORT || 8080 
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})
main()
    .then((res)=>{
        console.log("dbs connection successful")
    })
    .catch((err)=> console.log(err))
async function main() {
    //await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    await mongoose.connect(dbUrl); // this will connect to the database using the url provided in the .env file
}

const store= MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600, // this will update the session after 24 hours
})
store.on("error", (err) =>{
    console.log("mongo session store error",err)
})
//session middleware
const sessionOptions={
    store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // data to the milliseconds dena hota hai yaha 1 week ke baad cookies ka data hat jayega browser se 
        maxAge: 1000 * 60 * 60 * 24 * 7, // cookie will expire after 1 week
        httpOnly: true, // this will prevent the cookie from being accessed by client side javascript
    }
}

app.use(session(sessionOptions))
app.use(flash()) 

//passport middleware
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate())) // this will use the authenticate method provided by passport-local-mongoose

passport.serializeUser(User.serializeUser()) // this will serialize the user and store the user id in the session
passport.deserializeUser(User.deserializeUser()) // this will deserialize the user and get the user object from the user id stored in the session

//middleware which runs before every route and gives these info to them all
app.use((req,res,next)=>{
    res.locals.success=req.flash("success")//this will make the success message available in all views
    res.locals.error=req.flash("error")//this will make the error message available in all views
    res.locals.currUser= req.user 
    next()
})  

//routes
app.use("/listings",listingRouter)
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter)

app.get("/", (req, res) => {
    res.render("listing/home");
});
app.get("/confirm",(req,res)=>{
    req.flash("success","Your booking is successful, Have a nice Stay")
    res.redirect("/listings")
})
app.get("/privacy", (req, res) => {
    res.render("policies/privacy.ejs")
})
app.get("/terms", (req, res) => {
    res.render("policies/terms.ejs")
})
//garbage users delete 
setInterval(async () => {
    try {
        const result = await User.deleteMany({
            isVerified: false,
            otpExpires: { $lt: Date.now() }
        });
        console.log(`[CLEANUP] Deleted ${result.deletedCount} unverified expired users`);
    } catch (err) {
        console.error("[CLEANUP ERROR]", err);
    }
}, 60 * 60 * 1000);

//404 error handler
app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found"))
})
//error handling middleware
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!"}= err
    res.render("listing/error.ejs",{message})
    //res.status(statusCode).send(message)
})









