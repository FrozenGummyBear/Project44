import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { Button, Container } from "./EditMatch.styles";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "640px",
	outline: "none",
	padding: "39px 49px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};

const EditMatchModal = ({ open, onClose }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Container>
					<h4 className='title'>Edit Match Page</h4>
					<button className='close' onClick={onClose}>
						X
					</button>
					<div className='top'>
						<p className='input-title'>Match name </p>
						<p className='match__name'>A Really Long Title Match Name</p>
					</div>

					<p className='replace'>Replace Image</p>
					<p className='input-title'>Match Details </p>
					<div style={{ height: "168px!important" }}>
						<CKEditor
							style={{ height: "168px!important" }}
							editor={ClassicEditor}
							data='<p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump;  .</p>'
							onReady={(editor) => {
								// You can store the "editor" and use when it is needed.
								console.log("Editor is ready to use!", editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log({ event, editor, data });
							}}
							onBlur={(event, editor) => {
								console.log("Blur.", editor);
							}}
							onFocus={(event, editor) => {
								console.log("Focus.", editor);
							}}
						/>
					</div>

					<Button onClick={onClose}>Save</Button>
				</Container>
			</Box>
		</Modal>
	);
};

export default EditMatchModal;
