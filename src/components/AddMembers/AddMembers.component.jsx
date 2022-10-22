import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./AddMembers.styles";
import avatar from "../..//assets/avatar1.png";

const AddMembers = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<ModalContainer open={open} handleOpen={handleOpen} onClose={onClose}>
			<Container>
				<div>
					<h4 className='title'>Create Team Match</h4>
					<p className='sub-title'>Add your team members</p>
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

					<div className='user'>
						<img src={avatar} alt='avatar' />
						<p>Username</p>
						<p className='remove'>Remove</p>
					</div>
				</div>

				<div>
					<Button onClick={onClose}>Submit</Button>
					<p style={{ marginTop: "16px", marginBottom: "0px" }}>Step 2 of 2</p>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default AddMembers;
