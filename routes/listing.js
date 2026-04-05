const express= require("express");
const router= express.Router();
const wrapAsync=require("../utils/wrapAsync.js")
const { isLoggedIn, isOwner, validateListing, geocodeLocation} = require("../middleware.js");
const listingController= require("../controllers/listing.js");
const multer= require("multer"); //library used for handling multipart/form-data, which is primarily used for uploading files
const {storage} = require("../cloudConfig.js"); //importing cloudinary storage configuration
const upload= multer({storage}); // multer configuration for file uploads

router.get("/search",wrapAsync(listingController.search))
router.get("/price/:price",wrapAsync(listingController.price))
router.route("/") // This will handle both GET and POST requests to the root route by giving a common path 
    .get(wrapAsync(listingController.index))//index route 
    .post( isLoggedIn, upload.single("listing[image]"), geocodeLocation, validateListing, wrapAsync(listingController.createListing))//create route 

//new route
router.get("/new",isLoggedIn,listingController.renderNewForm)

router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //show route
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),geocodeLocation,validateListing, wrapAsync(listingController.updateListing)) //update route
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing)) //destroy route

//edit form route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))

//booking form route
router.get("/:id/booking",isLoggedIn,wrapAsync(listingController.renderBookingForm))

module.exports= router;