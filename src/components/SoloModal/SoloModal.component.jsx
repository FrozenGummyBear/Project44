import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { apiCall } from "../../api/ApiCall";
import { Button, Container, InputContainer } from "./SoloModal.styles";

const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "425px",
	outline: "none",
	padding: "39px 49px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};

const SoloModal = ({ open, setOpen, onClose, handleClose }) => {
	const [warning, setWarning] = useState(false);
	const [name, setName] = useState("");
	const [game, setGame] = useState("");
	const [date, setDate] = useState("");
	const [loot, setLoot] = useState("");
	const [detail, setDetail] = useState("");
	const [tag, setTag] = useState("");
	const [valid, setValid] = useState(false);

	useEffect(() => {
		if (
			name.length > 1 &&
			game.length > 1 &&
			date.length > 1 &&
			loot.length > 1 &&
			detail.length > 1 &&
			tag.length > 1
		) {
			setValid(true);
		}
	}, [name, game, date, loot, detail, tag]);

	const handleSubmit = () => {
		if (
			name.length < 1 ||
			game.length < 1 ||
			date.length < 1 ||
			loot.length < 1 ||
			detail.length < 1 ||
			tag.length < 1
		) {
			setWarning(true);
		} else {
			setWarning(false);
			apiCall(
				"post",
				{
					matchName: name,
					game: game,
					matchDate: date,
					lootAmount: loot,
					pledge: 100,
					matchDetails: detail,
					gameType: "public",
					gamekind: "solo",
					team: [
						{
							teamName: "test",
							players: [],
						},
						{
							teamName: "test",
							players: [],
						},
					],
					maxPlayers: 2,
				},
				`game/create`,
				onSuccess,
				onFailure
			);
		}
	};

	const onSuccess = (data) => {
		console.log("this is the data", data);
		setDate("");
		setDetail("");
		setLoot("");
		setName("");
		setTag("");
		setGame("");
		onClose();
		onClose();
	};

	const onFailure = (error) => {
		console.log("eror", error);
	};
	const [info, setInfo] = useState(false);
	const [tagInfo, setTagInfo] = useState(false);
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Container>
					<h4 className='title'>Create Solo Match</h4>
					<button className='close' onClick={onClose}>
						X
					</button>
					<InputContainer
						error={warning ? (name.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Match name </p>
						<input
							type='text'
							className='input'
							onChange={(e) => setName(e.target.value)}
						/>
						<p className='warning'>This field is required</p>
					</InputContainer>
					<InputContainer
						error={warning ? (game.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Game </p>
						<select className='input' onChange={(e) => setGame(e.target.value)}>
							<option selected='true' value='' disabled='disabled'></option>
							<option>Valorant</option>
							<option>League of Legends</option>
							<option>Team Fight Tactics</option>
							<option>Legends of Runeterra</option>
						</select>
						<p className='warning'>This field is required</p>
					</InputContainer>
					<InputContainer
						error={warning ? (date.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Match date </p>
						<input
							type='date'
							className='input'
							onChange={(e) => setDate(e.target.value)}
						/>
						<p className='warning'>This field is required</p>
					</InputContainer>
					<InputContainer
						error={warning ? (loot.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title info'>
							Loot amount <FaInfoCircle onClick={() => setInfo(!info)} />
							{info && (
								<div className='menu'>
									<p>
										Pool in money per team from P0 to P2000. Winnings split
										evenly.
									</p>
								</div>
							)}
						</p>
						<input
							type='text'
							className='input'
							onChange={(e) => setLoot(e.target.value)}
						/>
						<p className='warning'>This field is required</p>
					</InputContainer>
					<InputContainer
						error={warning ? (detail.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Match Details</p>
						<textarea
							name=''
							className='input'
							id=''
							cols='30'
							rows='20'
							style={{ minHeight: "60px" }}
							onChange={(e) => setDetail(e.target.value)}
						></textarea>
					</InputContainer>

					<InputContainer
						error={warning ? (tag.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title info'>
							Gamertag <FaInfoCircle onClick={() => setTagInfo(!tagInfo)} />
							{tagInfo && (
								<div className='menu'>
									<p>
										Your gamertag is displayed in the Match Page for others to
										add you.
									</p>
								</div>
							)}
						</p>
						<input
							type='text'
							className='input'
							onChange={(e) => setTag(e.target.value)}
						/>
						<p className='warning'>This field is required</p>
					</InputContainer>
					<Button
						onClick={handleSubmit}
						className={`${valid ? "valid__button" : ""}`}
					>
						Submit
					</Button>
				</Container>
			</Box>
		</Modal>
	);
};

export default SoloModal;
