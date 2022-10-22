import React, { useState } from "react";
import SoloModalCashOut from "../../../components/SoloModal/SoloModal-cashout.component";

const CashOut = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<h1>How to Cash Out</h1>
			<div className='cash-text'>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet.
			</div>
			<SoloModalCashOut open={open} setOpen={handleOpen} onClose={onClose} />
			<button className='cash' onClick={handleOpen}>
				Cash out
			</button>
		</>
	);
};
export default CashOut;
