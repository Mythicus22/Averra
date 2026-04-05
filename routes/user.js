const express= require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport= require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController= require("../controllers/user.js");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup) );

router.route("/login")
    .get(userController.renderLoginForm)
    //.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);
    .post(saveRedirectUrl, wrapAsync(userController.customLogin)); // Use customLogin instead of passport.authenticate

router.get("/logout",userController.logout);

router.route("/verify-otp")
    .get(userController.renderOtpForm)
    .post(wrapAsync(userController.verifyOtp))
module.exports=router;