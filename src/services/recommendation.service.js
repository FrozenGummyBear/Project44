const httpStatus = require("http-status");
const { Recomendation } = require("../models");
const ApiError = require("../utils/ApiError");

const createRecomendation = async (body) => {
  console.log("====================================");
  console.log(body);
  console.log("====================================");
  return Recomendation.create(body);
};
const updateRecommendation = async (body) => {
  return Recomendation.findByIdAndUpdate(
    body["ID"],
    {
      status: body["status"],
    },
    { new: true }
  );
};
const getRecommendation = async () => {
  return Recomendation.find({ status: "pending" }).populate([
    { path: "PID", select: ["username", "email", "profile"] },
  ]);
};

module.exports = {
  createRecomendation,
  updateRecommendation,
  getRecommendation,
};
