import React from "react";
import "./MainView.css";
import Navbar from "../../components/templates/navbar/Navbar";

const MainView = (props) => {
	const { children } = props;

	return (
		<main>
			<Navbar />
			<div className='main_body'>{children}</div>
		</main>
	);
};

export default MainView;
