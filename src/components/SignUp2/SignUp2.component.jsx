import {
	Container,
	InputContainer,
	Button,
	DispalyError,
} from "./SignUp2.styles";
import React from "react";
import { Link } from "react-router-dom";

const SignUpTwo = ({ onchange, onSubmmit, err }) => {
	return (
		<Container>
			<h4>Signup</h4>
			<p className='sub-title'>
				Already a user ?{" "}
				<Link to='/' className='red'>
					Login
				</Link>
			</p>
			<div className='top'>
				<div>
					<InputContainer>
						<p className='input-title'>Date of Birth</p>
						<input
							type='date'
							className='input'
							name='DoB'
							onChange={onchange}
						/>
						<DispalyError>{err["DoB"]}</DispalyError>
					</InputContainer>
					<InputContainer>
						<p className='input-title'>Riot ID</p>
						<input
							type='text'
							className='input'
							name='riotID'
							onChange={onchange}
						/>
						<DispalyError>{err["riotID"]}</DispalyError>
					</InputContainer>
				</div>
				<div>
					<Button style={{ marginTop: "25px" }} onClick={onSubmmit}>
						SUBMIT
					</Button>
					<p style={{ marginTop: "20px" }}>Step 2 of 2</p>
				</div>
			</div>
		</Container>
	);
};

export default SignUpTwo;
