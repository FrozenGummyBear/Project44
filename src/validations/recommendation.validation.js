const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createRecomendation = {
  body: Joi.object({
    matchDate: Joi.string().required(),
    desc: Joi.string().required(),
  }),
};
const updateRecommendation = {
  body: Joi.object({
    status: Joi.string().valid("rejected", "accepted").required(),
  }),
  params: {
    ID: Joi.string().custom(objectId),
  },
};
module.exports = {
  createRecomendation,
  updateRecommendation,
};
