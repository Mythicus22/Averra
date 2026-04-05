const Listing = require("./models/listing");
const Review = require("./models/review.js");
const {listingSchema, reviewSchema}= require("./schema.js")
const ExpressError=require("./utils/ExpressError.js")
const rateLimit = require('express-rate-limit');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        if (req.method === "GET") {
            req.session.redirectUrl = req.originalUrl;
        } 
        else if (req.method === "DELETE" && req.baseUrl.includes("/reviews") && req.params.id) { // If it's a DELETE request for a review, save the listing ID in the redirect URL necause browser cant directly redirect to a delete request
            req.session.redirectUrl = `/listings/${req.params.id}`;// Save the show page URL for review deletes
        }
        req.flash("error", "You must be logged in to perform this action!");
        return res.redirect("/login");
    }
    next();
};
module.exports.saveRedirectUrl = (req, res, next) => { //passport hamare req.session.redirecturl ko delete kr deta hai isliye hum yeh middleware bana rahe hai taki voh locals mein save ho jaye aur passport access na kr paye
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl; // make the redirect URL available in all views
    }
    next()
}
module.exports.isOwner= async (req, res, next) => {
    let {id}= req.params;
    let listing= await Listing.findById(id)
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this hotel!");
        return res.redirect(`/listings/${id}`);
    }
    next()
}
module.exports.validateListing=(req,res,next)=>{
    let {error}= listingSchema.validate(req.body)
        if(error){
            let errMsg= error.details.map((el)=> el.message).join(",")
            throw new ExpressError(400,errMsg)
        }
        else{
            next()
        }
}
module.exports.validateReview=(req,res,next)=>{
    let {error}= reviewSchema.validate(req.body)
        if(error){
            let errMsg= error.details.map((el)=> el.message).join(",")
            throw new ExpressError(400,errMsg)
        }
        else{
            next()
        }
}
module.exports.isReviewAuthor= async (req, res, next) => {
    let {id,reviewId}= req.params;
    let review= await Review.findById(reviewId)
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this Review!");
        return res.redirect(`/listings/${id}`);
    }
    next()
}
module.exports.limiter = rateLimit({
  windowMs: 10*60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this User, please try again later.'
});
module.exports.geocodeLocation = async (req, res, next) => {
    const { location, country } = req.body.listing;
    let latitude = null, longitude = null;
    function check() {
        if (req.method === "POST") {
            req.flash("error", "Location not found. Please check the location and country.");
            return res.redirect("/listings/new");
        }
        if (req.method === "PUT" && req.params.id) {
            req.flash("error", "Location not found. Please check the location and country.");
            return res.redirect(`/listings/${req.params.id}/edit`);
        }
        req.flash("error", "Location not found. Please check the location and country.");
        return res.redirect("/listings");
    }
    if (location && country) {
        const query = encodeURIComponent(`${location}, ${country}`);
        const geoUrl = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
        try {
            const response = await fetch(geoUrl, { headers: { 'User-Agent': 'YourApp/1.0' } });
            const data = await response.json();
            if (data.length > 0 && data[0].lat && data[0].lon) {
                latitude = parseFloat(data[0].lat);
                longitude = parseFloat(data[0].lon);
            }
            else{
                return check(); 
            }
        } catch (err) {
            return check(); 
        }
    }
    else{
        return check(); 
    }
    req.body.listing.latitude = latitude;
    req.body.listing.longitude = longitude;
    return next();
};