const express = require("express");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const { recommendationController } = require("../controllers/");
const { recommendationValidation } = require("../validations");
const router = express.Router();

router.route("/").get(recommendationController.getRecommendation);

router
  .route("/create")
  .post(
    auth([], []),
    validate(recommendationValidation.createRecomendation),
    recommendationController.createRecomendation
  );
router
  .route("/:ID/update")
  .post(
    validate(recommendationValidation.updateRecommendation),
    recommendationController.updateRecommendation
  );

module.exports = router;
