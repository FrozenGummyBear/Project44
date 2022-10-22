import React from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "../../components/templates/Admin-Nav/AdminNav";
import LoggedInNav from "../../components/templates/Logged-in-Nav/LoggedInNavbar";
import MobileNav from "../../components/templates/MobileNav/MobileNav";
import "./MinimalView.css";

const MinimalView = (props) => {
	const { children } = props;
	const history = useHistory();

	console.log("this is history", history.location.pathname);
	return (
		<main>
			{history.location.pathname.includes("admin") ? (
				<AdminNav />
			) : (
				<LoggedInNav />
			)}
			<MobileNav />

			<div className='main_body'>{children}</div>
		</main>
	);
};

export default MinimalView;
