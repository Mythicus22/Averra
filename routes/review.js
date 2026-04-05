const express= require("express");
const router= express.Router({mergeParams: true}); //this will merge the params from the parent route (listings/:id/reviews) into the child routers here so that we can read the listing id in this route aswell  
const Review= require("../models/review")
const wrapAsync=require("../utils/wrapAsync.js")
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js") // this will import the validateReview middleware function from the middleware.js file
const reviewController= require("../controllers/review.js")

//post reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

//delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports= router;