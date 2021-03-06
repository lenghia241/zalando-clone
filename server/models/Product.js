const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    required: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    index: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
