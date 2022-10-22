import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../api/ApiCall";
import { CustomeTable } from "./match-history-style";
const Games = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		apiFetch("get", "game", onSuccess, onFailure);
	}, []);

	const onSuccess = (resp) => {
		setGames(resp);
		console.log(resp);
	};
	const onFailure = (error) => {
		console.log("this failed", error);
	};
	return (
		<>
			<CustomeTable>
				<caption>Games</caption>
				<thead>
					<tr>
						<th scope='col'>Game Name</th>
						<th scope='col'>Type</th>
						<th scope='col'>Number of players</th>
						<th scope='col'>Game</th>
						<th scope='col'>Date</th>
					</tr>
				</thead>
				<tbody>
					{games.map((g) => (
						<tr>
							<td data-label='user'>{g.matchName}</td>
							<td data-label='date'>{g.gameType}</td>
							<td data-label='Game'>
								{" "}
								{g.team[0].players.length + g.team[1].players.length} /{" "}
								{g.maxPlayers}
							</td>
							<td data-label='Payout'>{g.game}</td>
							<td data-label='Date'>
								{g.matchDate.substring(8, 10)}.{g.matchDate.substring(5, 7)}.
								{g.matchDate.substring(0, 4)}
							</td>
						</tr>
					))}
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Games;
