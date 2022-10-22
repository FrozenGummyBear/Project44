const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  pogs: { type: Number, default: 0, required: true },
  price: { type: Number, default: 0, required: true },
});

const Strore = mongoose.model("Store", storeSchema);

module.exports = Strore;
