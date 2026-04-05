const mongoose= require("mongoose")
const Review = require("./review")

const Schema= mongoose.Schema
const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        url: String,
        filename: String,
        // type:String,
        // set: (v)=> v=== "" ? "https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg": v,
    },
    price:Number,
    location:String,
    country:String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ipAddress: String,
    latitude: Number,
    longitude: Number,
    category:{
        type: String,
        enum: ["culture","hostels","mountain","beaches","camping","castles","farmstays","urban","nature","island","apartment"],
        default: "apartment",
    }
})    
 
listingSchema.post("findOneAndDelete", async function (listing) {
    if (listing){
        await Review.deleteMany({
        _id: {
            $in: listing.reviews,
        }
    })};
})

const Listing= mongoose.model("Listing",listingSchema)
module.exports= Listing