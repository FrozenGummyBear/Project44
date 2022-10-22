import { useEffect, useState } from "react";
import { Container, FilterButtonsContainer, Matches } from "./games.styles";
import Match from "../../components/Match/Match.component";

import React from "react";
import heroImage from "../../assets/hero1.png";

import JoinMatch from "../../components/JoinMatch/JoinMatch.component";
import { apiFetch } from "../../api/ApiCall";

const Games = ({ game }) => {
	const [filter, setFilter] = useState("public");
	const [open, setOpen] = useState(false);
	const [selectedGame, setSelectedGame] = useState({});
	const handleOpen = (id) => {
		setSelectedGame(games.find((el) => el._id === id));
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const [games, setGames] = useState([]);

	useEffect(() => {
		apiFetch("get", "game", onSuccess, onFailure);
	}, [filter]);

	const onSuccess = (resp) => {
		setGames(
			resp
				.filter(
					(single) => single.game.toLowerCase() === game.name.toLowerCase()
				)
				.filter((g) => g.gameType.toLowerCase() === filter)
		);
		console.log(
			"resp",
			resp
				.filter(
					(single) => single.game.toLowerCase() === game.name.toLowerCase()
				)
				.filter((g) => g.gameType.toLowerCase() === filter)
		);
	};
	const onFailure = (error) => {
		console.log("this failed", error);
	};
	return (
		<Container>
			<img src={game.image} alt='homeHero' className='hero' />
			<Matches>
				<div className='match-head'>
					<p className='title'>{game.name} Matches</p>
					<p className='filter'>Filter by:</p>
					<FilterButtonsContainer>
						<button
							className={filter === "public" && "selected"}
							onClick={() => setFilter("public")}
						>
							Public
						</button>
						<button
							className={filter === "private" && "selected"}
							onClick={() => setFilter("private")}
						>
							Private
						</button>
					</FilterButtonsContainer>
				</div>
				<div className='match-list'>
					{games &&
						games.map((g) => (
							<Match
								handleOpen={handleOpen}
								handleClose={handleClose}
								game={g}
							/>
						))}
				</div>
			</Matches>
			<JoinMatch open={open} onClose={handleClose} game={selectedGame} />
		</Container>
	);
};

export default Games;
