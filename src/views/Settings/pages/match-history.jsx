import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../../api/ApiCall";
import { CustomeTable } from "./match-history-style";
const MatchHistory = () => {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		apiFetch(
			"get",
			"game/my-games",
			(data) => setMatches(data),
			(data) => console.log("this is error", data)
		);
	}, []);

	return (
		<>
			<CustomeTable>
				<caption>Match History</caption>
				<thead>
					<tr>
						<th scope='col'>Date</th>
						<th scope='col'>Name</th>
						<th scope='col'>Game</th>
						<th scope='col'>Payout</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='Date'>08/21/2020</td>
						<td data-label='Name'>
							<Link to='match' style={{ color: "black" }}>
								Some Generic Long Title Some Generic Long Title Some.
							</Link>
						</td>
						<td data-label='Game'>League of Legends</td>
						<td data-label='Payout'>23 pogs</td>
					</tr>
					<tr>
						<td data-label='Date'>07/21/2020</td>
						<td data-label='Name'>
							<Link to='match' style={{ color: "black" }}>
								A Short Title
							</Link>
						</td>
						<td data-label='Game'>Team Fights Tactics</td>
						<td data-label='Payout'>1203 pogs</td>
					</tr>
				</tbody>
			</CustomeTable>

			<CustomeTable>
				<caption>Upcoming Matches</caption>
				<thead>
					<tr>
						<th scope='col'>Date</th>
						<th scope='col'>Name</th>
						<th scope='col'>Game</th>
					</tr>
				</thead>
				<tbody>
					{matches.map((match) => (
						<tr>
							<td data-label='Date'>{match.matchDate}</td>
							<td data-label='Name'>
								<Link to='match' style={{ color: "black" }}>
									{match.matchName}
								</Link>
							</td>
							<td data-label='Game'>{match.game}</td>
						</tr>
					))}
				</tbody>
			</CustomeTable>
			{/* <h1>Match History</h1>
      <div className="match-history-content">
        <div className="row table-header">
          <span>Date </span>
          <span>Name </span>
          <span>Game </span>
          <span>Payout </span>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
          <div className="row">
            <span>Date: mm/dd/yy</span>
            <span>Name: Match Title</span>
            <span>Game: Valorant</span>
            <span>Payout: 23 pogs</span>
          </div>
        ))}
      </div> */}
		</>
	);
};
export default MatchHistory;
