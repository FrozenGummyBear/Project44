const express = require("express");

const userValidation = require("../validations/user.validate");
const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/imageupload");
const router = express.Router();

router
  .route("/")
  .post(validate(userValidation.createUser), userController.createUser)
  .get(async (req, res) => {
    res.send("Working");
  });
// validate(userValidation.getUser),
router
  .route("/update")
  .get(auth([], []), userController.getUser)
  .post(
    upload("profile", "image/").single("profile"),
    async (req, res, next) => {
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
      next();
    },
    validate(userValidation.updateUser),
    userController.updateUser
  )
  .delete(validate(userValidation.deleteUser), userController.deleteUser);
// router.route("/update-user-status").post(userController.updateUserStatus);
router.route("/success/:userID/:pogs").get(userController.updatePaymentStatus);
router.route("/cancel/:userID").get(async (req, res) => {
  res.send("failed payment");
});
//
module.exports = router; //
