const mongoose = require("mongoose");
const teamShema = mongoose.Schema({
	teamName: { type: String, required: true },
	players: [
		{
			PID: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
			profile: { type: String },
			username: {
				type: String,

				required: true,
			},
			tagName: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
				trim: true,
			},
		},
	],
});
const gameSchema = mongoose.Schema(
	{
		// HID: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
		matchName: { type: String, unique: true, required: true }, // hunter
		game: { type: String, required: true }, //valorant
		matchDate: { type: Date, required: true },
		lootAmount: { type: Number, required: true },
		pledge: { type: Number, required: true, default: 0 },
		matchDetails: { type: String, required: true },
		// gamerTag: { type: String, required: true },
		gameType: { type: String, enum: ["public", "private"], required: true },
		gamekind: {
			type: String,
			enum: ["team", "solo"],
			required: true,
		},
		team: [teamShema],
		maxPlayers: { type: Number, required: true, default: 2 }, //per team
	},
	{
		timestamps: true,
	}
);

// no of players per team
// on join select team

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
