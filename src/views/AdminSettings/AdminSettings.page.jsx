import React, { useState } from "react";
import AdminStepper from "../../components/AdminStepper/AdminSteper.component";
import { Container } from "./AdminSettings.styles";
import Games from "./pages/games";

import Pogs from "./pages/pogs";
import Recomendations from "./pages/recomendations";

const AdminSettings = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	return (
		<Container>
			<AdminStepper currentStep={currentStep} setStep={setStep}>
				<Recomendations />
				<Pogs />
				<Games />
			</AdminStepper>
		</Container>
	);
};

export default AdminSettings;
