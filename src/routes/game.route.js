const express = require("express");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const { gameController } = require("../controllers/");
const { gameValidation } = require("../validations");

const router = express.Router();
router.route("/").get(gameController.getAllGames);
router
	.route("/create")
	.post(validate(gameValidation.createGame), gameController.createGame);
router.route("/:GameID/join").post(
	auth([], []),
	(req, res, next) => {
		console.log(req.body, "this is the rewuest");
		next();
	},
	validate(gameValidation.joinGame),
	gameController.joinGame
);

module.exports = router;
