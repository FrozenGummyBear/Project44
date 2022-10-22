const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    profile: { type: String },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },

    password: {
      type: String,
      select: false,
      required: true,
      trim: true,
      minlength: 8,
    },
    DoB: { type: Date, required: true },
    riotID: {
      type: String,
      required: true,
    },
    pogs: {
      type: Number,
      default: 0,
      required: true,
    },
    pogStatus: {
      type: String,
      enum: ["pending", "failed", "paid", "unpaid"],
      required: true,
      default: "unpaid",
    },
    status: {
      type: String,
      enum: ["block", "pending", "active"],
      default: "active",
    },
    transctionID: { type: String, required: true, default: "unpaid" },
  },
  {
    timestamps: true,
  }
);
// validate(value) {
//         if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
//           throw new Error('Password must contain at least one letter and one number');
//         }
//       },
// add plugin that converts mongoose to json
// userSchema.plugin(toJSON);
// userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};
userSchema.statics.isUserNameTaken = async function (username, excludeUserId) {
  const user = await this.findOne({ username, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre("save", async function (next) {
  console.log("pres save=============================");
  console.log(this);
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
    console.log("changing user password");
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model("Users", userSchema);

module.exports = User;
