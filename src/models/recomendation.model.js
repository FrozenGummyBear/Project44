const mongoose = require("mongoose");

const recomendationSchema = mongoose.Schema({
  PID: { type: mongoose.SchemaTypes.ObjectId, ref: "Users", required: true },
  matchDate: { type: Date, required: true },
  desc: { type: String, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["rejected", "pending", "accepted"],
    default: "pending",
  },
});

const Recomendation = mongoose.model("Recomendation", recomendationSchema);
module.exports = Recomendation;
