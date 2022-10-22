const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { gameService } = require("../services");

const createGame = catchAsync(async (req, res) => {
  const game = await gameService.createGame(req.body);
  res.send(game);
});
const joinGame = catchAsync(async (req, res) => {
  const { username, email, pogs, profile, _id: PID } = req.user;
  const { tagName, teamID } = req.body;
  const { GameID } = req.params;

  const join = await gameService.gameJoin(
    {
      username,
      email,
      pogs,
      profile,
      teamID,
      tagName,
      PID,
      GameID,
    },
    req.user
  );
  res.send(join);
});
const getAllGames = catchAsync(async (req, res) => {
  const games = await gameService.getAllGames();
  res.send(games);
});

module.exports = {
  createGame,
  joinGame,
  getAllGames,
};
