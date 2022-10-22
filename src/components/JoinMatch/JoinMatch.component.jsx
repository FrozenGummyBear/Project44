import axios from "axios";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import avatar from "../..//assets/avatar1.png";
import { ENDPOINT } from "../../api/Api";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./JoinMatch.styles";

const JoinMatch = ({ open, setOpen, onClose, handleClose, game }) => {
	const handleOpen = () => {
		setOpen(true);
	};

	const [teamId, setTeamId] = useState("");
	const [teamName, setTeamName] = useState("");

	const onSubmit = () => {
		let datas = {
			teamID: teamId,
			tagName: "asdfas",
		};

		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.post(`${ENDPOINT}game/${game._id}/join`, datas, config)
			.then(function (response) {
				console.log(response);
				onClose();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const onSuccess = (resp) => {
		console.log("this is response", resp);
	};
	const onFailure = (error) => {
		console.log("this failed", error);
	};

	return (
		<ModalContainer open={open} handleOpen={handleOpen} onClose={onClose}>
			<Container>
				<div>
					<h4 className='title'>Join Team Match</h4>
					<p className='sub-title'>Select a team and join</p>
					<button className='close' onClick={onClose}>
						X
					</button>
					<InputContainer>
						<input
							type='text'
							className='input'
							placeholder='Search username'
						/>
						<BiSearchAlt2 className='icon' />
					</InputContainer>

					{game &&
						game.team &&
						game.team.map((team) => (
							<div className='user' onClick={(e) => setTeamId(team._id)}>
								<img src={avatar} alt='avatar' />
								<p>{team.teamName}</p>
								<p className='remove'>Select</p>
							</div>
						))}
				</div>

				<div>
					<Button onClick={onSubmit}>Submit</Button>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default JoinMatch;
