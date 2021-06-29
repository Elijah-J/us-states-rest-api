mongoose = require("mongoose");

stateSchema = mongoose.Schema({
  name: String,
  abbreviation: String,
});

module.exports = mongoose.model("State", stateSchema);
