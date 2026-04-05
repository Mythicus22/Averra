const Joi= require('joi'); 
module.exports.listingSchema= Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        country: Joi.string().required(),
        image: Joi.string().allow("",null),
        latitude: Joi.number().allow(null),   
        longitude: Joi.number().allow(null),
        category: Joi.string().required(),
        ipAddress: Joi.string().allow("", null), // Allow empty or null IP address
    }).required()
})

module.exports.reviewSchema= Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
})