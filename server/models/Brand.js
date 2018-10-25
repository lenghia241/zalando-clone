const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: {
    type: Schema.Types.Array,
    ref: "product"
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

module.exports = mongoose.model("Brand", BrandSchema);
