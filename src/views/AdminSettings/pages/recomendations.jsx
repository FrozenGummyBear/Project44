import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { apiCall, apiFetch } from "../../../api/ApiCall";
import { CustomeTable } from "./match-history-style";
const Recomendations = () => {
	const [recomendations, setRecomendations] = useState([]);
	const [fetch, setFetch] = useState(true);
	useEffect(() => {
		apiFetch("get", "recommendation", onSuccess, onFailure);
	}, [fetch]);
	const approve = (id) => {
		apiCall(
			"post",
			{
				status: "accepted",
			},
			`recommendation/${id}/update`,
			onApproveSuccess,
			onFailure
		);
	};
	const decline = (id) => {
		apiCall(
			"post",
			{
				status: "rejected",
			},
			`recommendation/${id}/update`,
			onApproveSuccess,
			onFailure
		);
	};
	const onSuccess = (resp) => {
		setRecomendations(resp);
		console.log("resp", resp);
	};
	const onFailure = (error) => {
		console.log("this failed", error);
	};

	const onApproveSuccess = () => {
		setFetch(!fetch);
		console.log("approved");
	};

	return (
		<>
			<CustomeTable>
				<caption>Match Recomendations</caption>
				<thead>
					<tr>
						<th scope='col'>Email</th>
						<th scope='col'>Date</th>
						<th scope='col'>description</th>

						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					{recomendations.map((recomendation) => (
						<tr>
							<td data-label='user'>{recomendation.email}</td>
							<td data-label='date'>
								{recomendation.matchDate.substring(0, 10)}
							</td>
							<td data-label='Game'>{recomendation.desc}</td>

							<td
								data-label='Date'
								style={{ display: "flex", flexDirection: "column" }}
							>
								<Button
									variant='outlined'
									color='success'
									onClick={() => approve(recomendation._id)}
								>
									Approve
								</Button>
								<Button
									variant='outlined'
									color='warning'
									style={{ marginTop: "10px" }}
									onClick={() => decline(recomendation._id)}
								>
									Decline
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Recomendations;
