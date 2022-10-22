import React from "react";
import { Container, GameLink } from "./horizontalStepper.styles";

const HorizontalStepper = ({ currentStep, children, setStep }) => {
	const steps = [
		"Valorant ",
		"League of Legends",
		"Team Fight Tactics",
		"Legends of Runeterra",
	];
	return (
		<Container>
			<div className='header'>
				{steps.map((step, index) => {
					const isActive = index === currentStep;
					return (
						<GameLink
							key={index}
							onClick={() => setStep(index)}
							active={isActive}
						>
							{step}
						</GameLink>
					);
				})}
			</div>
			<div className='content'>
				{React.Children.map(children, (child, index) => {
					if (index === currentStep) {
						return <div key={index}>{child}</div>;
					} else return null;
				})}
			</div>
		</Container>
	);
};

export default HorizontalStepper;
