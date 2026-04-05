const User= require("../models/user.js");
const passport = require("passport");
const { sendEmailOTP } = require("../utils/otp.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.signup = async (req,res)=>{
    try {
        let {username, email, password}= req.body;
        checkUser= await User.findByUsername(username)
        checkEmail= await User.findOne({email})
        if(checkUser){
            req.flash("error","Username already taken")
            return res.redirect("/signup")
        }
        else if (checkEmail) {
            req.flash("error","Email already registered")
            return res.redirect("/signup")
        }else{
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            await sendEmailOTP(email, otp);
            const newUser = new User({
                username,
                email,
                otp,
                otpExpires: Date.now() + 5 * 60 * 1000 // 5 minutes from now
            });
            await User.register(newUser, password);
            req.session.pendingUserEmail = email; // Save for OTP verification
            res.redirect("/verify-otp");
        }
    } 
    catch (e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.renderOtpForm = (req, res) => {
    res.render("users/verifyOtp.ejs");
};
module.exports.verifyOtp = async (req, res, next) => {
    const { otp } = req.body;
    console.log(otp)
    const email = req.session.pendingUserEmail;
    console.log(email)
    if (!email) {
        req.flash("error", "Session expired. Please sign up again.");
        return res.redirect("/signup");
    }
    const user = await User.findOne({ email });
    console.log(user)
    console.log(user.otp)
    console.log(user.otpExpires)
    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
        req.flash("error", "Invalid or expired OTP.");
        return res.redirect("/verify-otp");
    }
    // OTP is valid, clear OTP fields and log in user
    user.otp = undefined;
    user.otpExpires = undefined;
    user.isVerified = true;
    await user.save();
    req.login(user, (err) => {
        if (err) return next(err);
        req.flash("success", "Signup successful!");
        res.redirect("/listings");
    });
};
module.exports.customLogin = async (req, res, next) => {
    const { username, password } = req.body;
    const result = await User.authenticate()(username, password);
    if (!result.user) {
        const userExists = await User.findOne({ username });
        if (!userExists) {
            req.flash("error", "User not found. Please sign up first.");
            return res.redirect("/signup");
        } else {
            req.flash("error", "Incorrect password. Please try again.");
            return res.redirect("/login");
        }
    }
    req.login(result.user, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to Averra! You are logged in successfully.");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    });
};
module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","You have logged out successfully!");
        res.redirect("/listings");
    })
}
