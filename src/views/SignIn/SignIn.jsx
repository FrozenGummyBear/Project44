import React from "react";
import SignInForm from "../../components/SignIn/SignIn.component";

import { Container } from "./SignIn.styles";

const SignIn = (props) => {
	const sucess = (data) => {
		if (data.role === "Admin") {
			props.history.push("/admin");
		} else {
			props.history.push("/home");
		}
	};
	return (
		<Container>
			<h1 className='title'>Welcome Pewpogger!</h1>
			<div className='forms'>
				<SignInForm sucess={sucess} />
			</div>
		</Container>
	);
};

export default SignIn;
