import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsForwardFill } from "react-icons/bs";
import { Button, Container, InputContainer } from "./SoloModal.styles";
const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "368px",
	outline: "none",
	padding: "32px 24px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};
const CashOut = ({ open, setOpen, onClose }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Container>
					<div className='colu'>
						<div>
							<h4 className='title'>Cash out</h4>
							<p
								className='sub-title'
								style={{ textAlign: "left", marginBottom: "60px;" }}
							>
								Wallet: 5000 pogs
							</p>
							<button className='close' onClick={onClose}>
								X
							</button>
							<InputContainer>
								<p className='input-title'>Enter amount*</p>{" "}
								<div className='short-field-container'>
									<input type='text' className='input__second' />{" "}
									<span>
										<BsForwardFill />
									</span>
									<input type='text' className='input__second' disabled />
								</div>
							</InputContainer>
							<InputContainer>
								<p className='input-title'>Send to account*</p>
								<select className='input'>
									<option>Select</option>
								</select>
							</InputContainer>
						</div>

						<div>
							<Button onClick={onClose}>Submit</Button>
						</div>
					</div>
				</Container>
			</Box>
		</Modal>
	);
};

export default CashOut;
