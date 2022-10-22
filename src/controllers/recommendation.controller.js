const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { recommendationService, emailService } = require("../services");

const createRecomendation = catchAsync(async (req, res) => {
  req.body["PID"] = req.user["_id"];
  req.body["email"] = req.user["email"];
  const recomendation = await recommendationService.createRecomendation(
    req.body
  );
  res.send(recomendation);
});

const updateRecommendation = catchAsync(async (req, res) => {
  const update = await recommendationService.updateRecommendation({
    status: req.body["status"],
    ID: req.params["ID"],
  });
  emailService.sendRecommendation(update);
  res.send(update);
});
const getRecommendation = catchAsync(async (req, res) => {
  const recomendations = await recommendationService.getRecommendation();
  res.send(recomendations);
});
module.exports = {
  createRecomendation,
  updateRecommendation,
  getRecommendation,
};
