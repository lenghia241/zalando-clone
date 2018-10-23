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
    type: String,
    required: true
  }
});

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: {
    type: Schema.Types.Array,
    ref: "products"
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
  }
});

module.exports = mongoose.model("product", ProductSchema);
