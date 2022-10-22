import React, { useState } from "react";
import Stepper from "../../components/stepper/Steper.component";
import { Container } from "./Settings.styles";

import General from "./pages/general";
import MatchHistory from "./pages/match-history";
import UpcommingMatches from "./pages/upcoming-matches";
import PaymentInfo from "./pages/payment-info";
import GammingAccount from "./pages/gaming-account";
import CashOut from "./pages/cash-out";

const Settings = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	return (
		<Container>
			<Stepper currentStep={currentStep} setStep={setStep}>
				<General />
				<MatchHistory />
				{/* <UpcommingMatches/> */}
				<PaymentInfo />
				<GammingAccount />
				<CashOut />
			</Stepper>
		</Container>
	);
};

export default Settings;
