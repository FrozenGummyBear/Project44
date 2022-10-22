import React, { useState } from "react";
import Match from "../../../components/Match/Match.component";
const UpcommingMatches = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<h1>Upcoming Matches</h1>
			<div className='upcoming-matches'>
				<div className='match-list'>
					<Match handleOpen={handleOpen} handleClose={handleClose} />
					<Match handleOpen={handleOpen} handleClose={handleClose} />
				</div>
			</div>
		</>
	);
};
export default UpcommingMatches;
