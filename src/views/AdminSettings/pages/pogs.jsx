import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../api/ApiCall";
import { CustomeTable } from "./match-history-style";
const Pogs = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		apiFetch("get", "game", onSuccess, onFailure);
	}, []);

	const onSuccess = (resp) => {
		setGames(resp);
	};
	const onFailure = (error) => {
		console.log("this failed", error);
	};
	return (
		<>
			<CustomeTable>
				<caption>Pogs</caption>
				<thead>
					<tr>
						<th scope='col'>Name of Game</th>
						<th scope='col'>Pogs</th>
					</tr>
				</thead>
				<tbody>
					{games.map((g) => (
						<tr>
							<th scope='col'>{g.matchName}</th>
							<th scope='col'>{g.lootAmount}</th>
						</tr>
					))}
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Pogs;
