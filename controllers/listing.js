const Listing = require("../models/listing");

module.exports.index= async (req, res) => {
    const { category } = req.query;
    if (category) {
        const listings = await Listing.find({ category: new RegExp(`^${category}$`, 'i') });
        if (listings.length === 0) {
            req.flash("error", "No listings found for this category!");
            return res.redirect("/listings");
        }
        else {
            return res.render("listing/index.ejs", { allListings: listings });
        }
    }
    const allListings = await Listing.find({});
    res.render("listing/index.ejs",{allListings})
}
module.exports.search= async(req,res)=>{
    const {place}= req.query
    if (place) {
        const listings= await Listing.find({location: new RegExp(`^${place}$`, 'i' )})
        if (listings.length === 0) {
            req.flash("error", "No Hotels found in this area");
            return res.redirect("/listings");
        }
        else {
            return res.render("listing/index.ejs", { allListings: listings });
        }
    }
}
module.exports.price = async (req, res) => {
    const { price } = req.params;
    let query = {};
    switch (price) {
        case "1":
            query = { price: { $lt: 2000 } };
            break;
        case "2":
            query = { price: { $gte: 2000, $lt: 4000 } };
            break;
        case "3":
            query = { price: { $gte: 4000, $lt: 6000 } };
            break;
        case "4":
            query = { price: { $gte: 6000, $lt: 8000 } };
            break;
        case "5":
            query = { price: { $gte: 8000 } };
            break;
        default:
            req.flash("error", "Invalid price filter");
            return res.redirect("/listings");
    }
    const listings = await Listing.find(query);
    if (listings.length === 0) {
        req.flash("error", "No Hotels found in this Price range");
        return res.redirect("/listings");
    } else {
        return res.render("listing/index.ejs", { allListings: listings });
    }
};
module.exports.renderNewForm=(req,res)=>{
    res.render("listing/new.ejs")
}
module.exports.showListing= async (req,res)=>{ 
    let {id}= req.params
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path: "author"},}).populate("owner") // populate the reviews and owner fields
    if(!listing){
        req.flash("error","Listing you requested does not exist!")
        return res.redirect("/listings")
    }
    console.log(listing)
    res.render("listing/show.ejs",{listing})
}
module.exports.createListing= async (req,res)=>{
    const newListing= new Listing(req.body.listing)
    //image upload handling and ip address storage
    let url=req.file.path
    let filename=req.file.filename
    newListing.owner= req.user._id // set the owner of the listing to the current user
    newListing.image={url,filename} // set the image url and filename to the file path
    newListing.ipAddress = req.ip; // store the IP address of the user who created the listing
    console.log(newListing.ipAddress)
    console.log(newListing.category)
    await newListing.save()
    req.flash("success","New listing created successfully!")
    res.redirect(`/listings/${newListing._id}`);
}
module.exports.renderEditForm= async (req,res)=>{
    let {id}= req.params
    const listing= await Listing.findById(id)
    if(!listing){
        req.flash("error","Listing you requested does not exist!")
        return res.redirect("/listings")
    }
    // let originalImageUrl = listing.image.url; 
    // originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_150,w_200,q_30"); // Adjust the URL to scale the image width to 500px
    res.render("listing/edit.ejs",{listing})
} 
module.exports.updateListing= async (req,res)=>{
    let {id}= req.params;
    let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing})
    if(typeof req.file !== "undefined"){ // check if the file is uploaded
        let url=req.file.path
        let filename=req.file.filename
        listing.image={url,filename} 
        await listing.save()
    }
    req.flash("success","Listing updated successfully!")
    res.redirect(`/listings/${id}`)
}
module.exports.destroyListing= async (req,res)=>{
    let {id}= req.params
    let deletedListing= await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    req.flash("success","Listing deleted successfully!")
    res.redirect("/listings")
}
module.exports.renderBookingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect(`/listings/${id}`)
    }
    const { start, end } = req.query;
    let numDays;
    if (start && end) {
        const startDateObj = new Date(start);
        const endDateObj = new Date(end);
        const diffTime = Math.abs(endDateObj - startDateObj);
        numDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // days between
    }
    custName=req.user.username
    custEmail=req.user.email
    res.render("listing/booking.ejs", { listing, startDate: start, endDate: end, numDays, custName, custEmail });
};
