const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("todo", TodoSchema);
