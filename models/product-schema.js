const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A product must have a name"],
  },
  price: {
    type: Number,
    require: [true, "A product must have a price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    enum: {
      values: ["marcos", "liddy", "marcos", "ikea", "caressa"],
      messasge: "{VALUE} is not supported",
    },
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
