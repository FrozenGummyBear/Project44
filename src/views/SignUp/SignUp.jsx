import React, { useState } from "react";
import SignUpOne from "../../components/SignUp1/SignUp1.component";
import SignUpTwo from "../../components/SignUp2/SignUp2.component";

import { Container } from "./SignUp.styles";
import { apiCall } from "../../api/ApiCall";
const SignUp = (props) => {
	const [step, setStep] = useState(0);

	const [user, setUser] = useState({});
	const [err, setErrors] = useState({});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	const handelSubmmit = (e) => {
		e.preventDefault();
		delete user["confirmPassword"];
		apiCall("post", user, `auth/register`, onSuccess, onFailure);
	};
	const onFailure = (error) => {
		console.log(error.response.data.message);
		if (
			error.response.status == 400 &&
			error.response.data.type == "validation"
		)
			return setErrors({ ...JSON.parse(error.response.data.message) });
		//   console.log(JSON.parse(error.response.data.message));

		//   toast.error(error.response.data);
	};

	const onSuccess = (data) => {
		console.log("Registerd  successfully !");
		props.history.push("/");

		// toast.success("Registerd  successfully !");
		// setTimeout(() => {
		//   navigate("/");
		// }, 2000);
	};
	return (
		<Container>
			<h1 className='title'>Welcome Pewpogger!</h1>
			<div className='forms'>
				{step === 0 ? (
					<SignUpOne setStep={setStep} onchange={handleChange} err={err} />
				) : (
					<SignUpTwo
						onchange={handleChange}
						onSubmmit={handelSubmmit}
						err={err}
					/>
				)}
			</div>
		</Container>
	);
};

export default SignUp;
