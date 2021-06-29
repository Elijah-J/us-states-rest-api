const express = require("express");
const State = require("../models/State");

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await State.find();

  try {
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
