const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => console.log("Product route is working"));
