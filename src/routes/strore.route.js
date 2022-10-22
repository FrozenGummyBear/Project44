const express = require("express");
const validate = require("../middlewares/validate");
const authValidation = require("../validations/auth.validation");
const { storeController } = require("../controllers/");
const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/").post(storeController.createStore);
router.route("/:id").get(storeController.getStoreByID);
module.exports = router;
