const httpStatus = require("http-status");

const mongoose = require("mongoose");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

const createUser = async (userBody) => {
  userBody["DoB"] = Date(userBody["DoB"]);
  const [email, username] = await Promise.all([
    User.isEmailTaken(userBody.email),
    User.isUserNameTaken(userBody.username),
  ]);
  // await User.isEmailTaken(userBody.email);
  if (email || username) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      email ? "email already taken" : "user name already taken"
    );
  }
  return await User.create(userBody);
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email }).select("password");
};
const getUserByUsername = async (username) => {
  return User.findOne({ username }).select({ password: 1, role: 1 });
};
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }

  return user;
};
/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
// const updateUserById = async (userId, updateBody) => {
//   const user = await getUserById(userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, "User not found");
//   }
//   if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
//     throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
//   }
//   Object.assign(user, updateBody);
//   await user.save();
//   return user;
// };
const updateUserById = async (updateBody) => {
  console.log("updatedBody:", updateBody);
  const user = await getUserById(updateBody["_id"]);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  // User.isEmailTaken(updateBody.email, updateBody["_id"])
  // await User.isUserNameTaken(userBody.username);

  if (
    updateBody.username &&
    (await User.isUserNameTaken(updateBody.username, updateBody["_id"]))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "user name already taken");
  }
  if (
    updateBody.email &&
    (await User.isEmailTaken(updateBody.email, updateBody["_id"]))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  Object.assign(user, updateBody);
  console.log("password changed");
  console.log(updateBody);
  await user.save();
  return user;
};
/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};
const updatePaymentStatus = async ({
  id,
  pogs = 0,
  pogStatus = "unpaid",
  transctionID = "unpaid",
}) => {
  id = mongoose.Types.ObjectId(id);
  return User.findByIdAndUpdate(
    id,
    {
      $inc: {
        pogs: pogs,
      },
      pogStatus,
      transctionID,
    },
    { new: true }
  );
};
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  updateUserById,
  deleteUserById,
  loginUserWithEmailAndPassword,
  updatePaymentStatus,
};
