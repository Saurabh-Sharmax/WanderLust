const joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    country: joi.string().required(),
    price: joi.number().required().min(0),
    category: joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Amazing Pools",
        "Camping",
        "Farms",
        "Arctic",
        "Forests",
        "Lakes",
        "Beaches",
      )
      .required(),
    image: joi.string().url().allow("", null)
  })
});
module.exports.reviewSchema = joi.object({
  review: joi.object({
    rating: joi.number().required().min(1).max(5),
    comment: joi.string().required()
  }).required()
});
