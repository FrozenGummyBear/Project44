const httpStatus = require("http-status");
const { Game, User } = require("../models");
const ApiError = require("../utils/ApiError");

const createGame = async (game) => {
  return Game.create(game);
};
const gameJoin = async (body, user) => {
  const game = await getGameByID(body["GameID"]);
  const { PID, profile, username, tagName, email } = body;
  // PID
  // team name
  // GameID
  // get Game and price
  //check user have price
  // deduct
  //join
  // const [email, username] = await Promise.all([
  //   User.findByIdAndUpdate(body["PID"], user),
  //   game.save(),
  // ]);

  if (user.pogs >= game.pledge) {
    let teamLength;
    let index = game["team"].findIndex((team) => {
      if (team._id == body["teamID"]) {
        console.log("====================================");
        console.log(team);

        const { players } = team;
        console.log("====================================");
        console.log();
        console.log("====================================");
        console.log("====================================");
        teamLength = players.length;
      }

      return team._id == body["teamID"];
    });

    console.log("====================================");
    console.log(teamLength);
    console.log("====================================");
    if (
      index != -1 &&
      teamLength != undefined &&
      teamLength < game["maxPlayers"]
    ) {
      console.log(
        "checking:",
        teamLength < game["maxPlayers"],
        ":length:",
        teamLength,
        ":maxplayers:",
        game["maxPlayers"]
      );
      user.pogs -= game.pledge;
      game["team"][index]["players"].push({
        PID,
        profile,
        username,
        tagName,
        email,
      });

      const [newUser, newGame] = await Promise.all([
        User.findByIdAndUpdate(body["PID"], user),
        game.save(),
      ]);
      return newGame;
    } else {
      throw new ApiError(
        httpStatus.FAILED_DEPENDENCY,
        teamLength != undefined
          ? "Sorry This Team is Full"
          : "oops Team not found"
      );
    }
  } else {
    throw new ApiError(
      httpStatus.FAILED_DEPENDENCY,
      "You don't have enough pogs"
    );
  }
};
const getGameByID = async (ID) => {
  return Game.findById(ID);
};
const getAllGames = async () => {
  return Game.find({});
};
module.exports = {
  createGame,
  gameJoin,
  getGameByID,
  getAllGames,
};
