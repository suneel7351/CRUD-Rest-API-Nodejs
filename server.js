const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT || 5000;
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
require("./routes/routes")(app);
require("./db")();
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
