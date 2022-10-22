import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "425px",
	outline: "none",
	padding: "15px 49px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};

export default function ModalContainer({ children, open, onClose }) {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style} className='cust-modal'>
					{React.Children.map(children, (child, index) => {
						return <div key={index}>{child}</div>;
					})}
				</Box>
			</Modal>
		</div>
	);
}
