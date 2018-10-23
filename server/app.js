const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const todo = require("./routes/todo.js");
const products = require("./routes/products.js");

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "../")));

// DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/todo", todo);
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Now listening for request on port ${port}"`);
});
