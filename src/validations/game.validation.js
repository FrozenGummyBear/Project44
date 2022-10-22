const Joi = require("joi");
const { objectId } = require("./custom.validation");
const players = Joi.object().keys({
  PID: Joi.string().custom(objectId).required(),
  profile: Joi.string(),
  username: Joi.string().required(),
  email: Joi.string().required(),
});
const teamSchema = Joi.object().keys({
  teamName: Joi.string().required(),
  players: Joi.array().items(players).default([]),
});
const createGame = {
  body: Joi.object({
    matchName: Joi.string().required(),
    game: Joi.string().required(),
    matchDate: Joi.string().required(),
    lootAmount: Joi.number().required(),
    pledge: Joi.number().required(),
    matchDetails: Joi.string().required(),
    gameType: Joi.string().valid("public", "private").required(),
    gamekind: Joi.string().valid("team", "solo").required(),
    team: Joi.array().items(teamSchema).required(),
    maxPlayers: Joi.number().required(),
  }),
};
const joinGame = {
  body: Joi.object({
    teamID: Joi.string().custom(objectId),
    tagName: Joi.string().required(),
  }),
  params: Joi.object({
    GameID: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createGame,
  joinGame,
};
