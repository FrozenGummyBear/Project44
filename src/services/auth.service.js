const httpStatus = require("http-status");
const tokenService = require("./token.service");
const userService = require("./user.service");
const { Token, Otp } = require("../models/");
const ApiError = require("../utils/ApiError");
const { tokenTypes } = require("../config/tokens");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.FORBIDDEN, "Incorrect email or password");
  }
  return user;
};
const loginUserWithUserNameAndPassword = async (username, password) => {
  const user = await userService.getUserByUsername(username);

  console.log("====================================");
  console.log(user);
  console.log("====================================");
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.FORBIDDEN, "Incorrect userName or password");
  }
  return user;
};
/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({
    token: refreshToken,
    type: tokenTypes.REFRESH,
    blacklisted: false,
  });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await refreshTokenDoc.remove();
};

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async (refreshToken) => {
  console.log("refreshToken:", refreshToken);
  try {
    const refreshTokenDoc = await tokenService.verifyToken(
      refreshToken,
      tokenTypes.REFRESH
    );
    const user = await userService.getUserById(refreshTokenDoc.user);
    console.log("refreshTokenDoc:", refreshTokenDoc);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
  }
};

/**
 * Reset password
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(
      resetPasswordToken,
      tokenTypes.RESET_PASSWORD
    );
    const user = await userService.getUserById(resetPasswordTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await userService.updateUserById({ _id: user._id, password: newPassword });
    await Token.deleteMany({ user: user._id, type: tokenTypes.RESET_PASSWORD });
  } catch (error) {
    console.log(error);
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password reset failed");
  }
};

/**
 * Verify email
 * @param {string} verifyEmailToken
 * @returns {Promise}
 */
const verifyEmail = async (verifyEmailToken, verficationCode) => {
  try {
    let verifyEmailTokenDoc;
    if (verifyEmailToken) {
      verifyEmailTokenDoc = await tokenService.verifyToken(
        verifyEmailToken,
        tokenTypes.VERIFY_EMAIL
      );
    } else {
      verifyEmailTokenDoc = await Otp.findOne({ code: verficationCode });
    }
    console.log(verifyEmailTokenDoc);
    const user = await userService.getUserById(verifyEmailTokenDoc.user);
    console.log(user);
    if (!user) {
      console.log("trrow errerrerfdvhgvdbajkbkb");
      throw new Error();
    }
    await Token.deleteMany({ user: user._id, type: tokenTypes.VERIFY_EMAIL });
    await Otp.deleteMany({ user: user._id, type: tokenTypes.VERIFY_EMAIL });
    await userService.updateUserById(user._id, { isEmailVerified: true });
  } catch (error) {
    console.log(error);
    throw new ApiError(httpStatus.FORBIDDEN, "Email verification failed");
  }
};

module.exports = {
  loginUserWithEmailAndPassword,
  loginUserWithUserNameAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
};
