import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { apiCall } from "../../api/ApiCall";
import { Button, Container, InputContainer } from "./RecomendModal.styles";

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

const RecomendModal = ({ open, setOpen, onClose, handleClose }) => {
	const [warning, setWarning] = useState(false);

	const [date, setDate] = useState("");

	const [valid, setValid] = useState(false);
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (description.length > 1 && date.length > 1) {
			setValid(true);
		}
	}, [date, description]);

	const handleSubmit = () => {
		if (description.length < 1 || date.length < 1) {
			setWarning(true);
		} else {
			setWarning(false);
			setDate("");

			apiCall(
				"post",
				{
					matchDate: date,
					desc: description,
				},
				`recommendation/create`,
				onSuccess,
				onFailure
			);
		}
	};

	const onSuccess = () => {
		onClose();
	};

	const onFailure = (error) => {
		console.log("eror", error);
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Container>
					<h4 className='title'>Recomend A Match</h4>
					<button className='close' onClick={onClose}>
						X
					</button>
					<InputContainer
						error={warning ? (date.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Match Date </p>
						<input
							type='date'
							className='input'
							onChange={(e) => setDate(e.target.value)}
						/>
						<p className='warning'>This field is required</p>
					</InputContainer>

					<InputContainer
						error={warning ? (date.length < 1 ? "invalid" : "valid") : ""}
					>
						<p className='input-title'>Match Description </p>
						<textarea
							type='description'
							className='input'
							onChange={(e) => setDescription(e.target.value)}
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

export default RecomendModal;
