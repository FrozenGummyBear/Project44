import React from "react";
import { Contanier } from "./AdminStepper.styles";

const AdminStepper = ({ currentStep, children, setStep }) => {
	const steps = ["Recomendations ", "Pogs", "Games"];
	return (
		<Contanier>
			<div className='header'>
				<h1>Adminstrator</h1>
				<div className='nav'>
					{steps.map((step, index) => {
						const isActive = index === currentStep;
						return (
							<button
								key={index}
								onClick={() => setStep(index)}
								className={` tab ${isActive && "active "} `}
							>
								{step}
							</button>
						);
					})}
				</div>
			</div>
			<div></div>
			<div className='content'>
				{React.Children.map(children, (child, index) => {
					if (index === currentStep) {
						return (
							<div className='nestd-container' key={index}>
								{child}
							</div>
						);
					} else return null;
				})}
			</div>
		</Contanier>
	);
};

export default AdminStepper;
