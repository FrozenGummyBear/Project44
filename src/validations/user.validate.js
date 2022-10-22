const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    username: Joi.string().required(),
    profile: Joi.string(),
    DoB: Joi.string().required(),
    riotID: Joi.string().required(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  body: Joi.object().keys({
    _id: Joi.string().custom(objectId).required(),
    email: Joi.string().email(),
    password: Joi.string().custom(password),
    username: Joi.string(),
    // sex: Joi.string().valid("male", "female"),
    DoB: Joi.string(),
    profile: Joi.string(),
    oldImg: Joi.string(),
    riotID: Joi.string(),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const checkID = {
  _id: Joi.string().custom(objectId).required(),
};
module.exports = {
  createUser,
  // getUsers,
  getUser,
  updateUser,
  deleteUser,
  checkID,
};

const schema = Joi.object({
  type: Joi.number().required().valid(1, 2, 3),
  firstname: Joi.alternatives().conditional("type", {
    is: 1,
    then: Joi.string().required(),
  }),
  lastname: Joi.alternatives().conditional("type", {
    is: 1,
    then: Joi.string().required(),
  }),
  salary: Joi.alternatives().conditional("type", {
    is: 2,
    then: Joi.number().required(),
  }),
  pension: Joi.alternatives().conditional("type", {
    is: 2,
    then: Joi.number().required(),
  }),
  credit: Joi.alternatives().conditional("type", {
    is: 3,
    then: Joi.number().required(),
  }),
  debit: Joi.alternatives().conditional("type", {
    is: 3,
    then: Joi.number().required(),
  }),
});
