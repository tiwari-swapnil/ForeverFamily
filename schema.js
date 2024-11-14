const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        name: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string().allow("", null),
        description: Joi.string().required(),
        age: Joi.number().required().min(0),
        contact: Joi.string().required(),
        orphanage_name: Joi.string().required(),
    }).required(),
});