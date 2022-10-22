const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const otpSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },

    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
otpSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
