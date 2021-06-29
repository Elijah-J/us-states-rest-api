require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const statesRoute = require("./routes/states.js");

const app = express();

app.use(bodyParser.json());

app.use("/states", statesRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hjxjb.mongodb.net/us_states_data?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send("API Home");
});

app.listen(3000);
