const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const { deleteFile } = require("../middlewares/error");
const path = require("path");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.send(user);
});

const getAllUser = catchAsync(async (req, res) => {
  const user = await userService.getByYear();
  console.log("user =>" + user);
  res.send(user);
});

const getUser = catchAsync(async (req, res) => {
  // const user = await userService.getUserById(req.query.userId);
  // if (!user) {
  //   throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  // }
  const { transctionID, status, ...user } = req.user._doc;

  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  if (req.file) {
    req.body["profile"] = "profile/" + req.file.filename;
  }
  let oldImg = req.body["oldImg"];
  delete req.body["oldImg"];
  const user = await userService.updateUserById(req.body);
  if (oldImg) {
    deleteFile(path.join(__dirname, "..", "public", "pewpog", oldImg));
  }

  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const updatePaymentStatus = catchAsync(async (req, res) => {
  const user = await userService.updatePaymentStatus({
    id: req.params.userID,
    pogs: req.params.pogs,
    pogStatus: "paid",
    transctionID: req.query.session_id,
  });
  res.redirect(`${process.env.CLIENT_URL}`);
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
  ////////////////////////////////////////////////////////////////////////////////
  updatePaymentStatus,
};
