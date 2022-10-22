import { Container, InputContainer, Button, DispalyError } from "./SignUp1";
import React from "react";
import { Link } from "react-router-dom";
const SignUpOne = ({ setStep, onchange, err }) => {
	return (
		<Container>
			<h4>Signup</h4>
			<p className='sub-title'>
				Already a user ?{" "}
				<Link to='/' className='red'>
					Login
				</Link>
			</p>
			<InputContainer>
				<p className='input-title'>Email *</p>
				<input type='text' className='input' name='email' onChange={onchange} />
				<DispalyError>{err["email"]}</DispalyError>
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Username *</p>
				<input
					type='text'
					className='input'
					name='username'
					onChange={onchange}
				/>
				<DispalyError>{err["username"]}</DispalyError>
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Password *</p>
				<input
					type='text'
					className='input'
					name='password'
					onChange={onchange}
				/>
				<DispalyError>{err["password"]}</DispalyError>
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Confirm Password *</p>
				<input
					type='text'
					className='input'
					name='confirmPassword'
					onChange={onchange}
				/>
				<DispalyError>{err["confirmPassword"]}</DispalyError>
			</InputContainer>

			<Button style={{ marginTop: "31px" }} onClick={() => setStep(1)}>
				Next
			</Button>
			<p style={{ marginTop: "20px" }}>Step 1 of 2</p>
		</Container>
	);
};

export default SignUpOne;
