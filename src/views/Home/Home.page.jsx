import React, { useEffect, useState } from "react";
import { apiFetch } from "../../api/ApiCall";

import HorizontalStepper from "../../components/horizontal-stepper/horizontalStepper.component";
import { Container } from "./Home.styles";
import Valorant from "../../assets/hero1.png";
import LeagueofLegends from "../../assets/hero2.png";
import TeamFightTactics from "../../assets/hero3.png";
import LegendsofRuneterra from "../../assets/hero4.png";
import Games from "../../components/Games/Game.component";

const Home = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [games, setGames] = useState([
		{
			name: "Valorant",
			image: Valorant,
		},
		{
			name: "League of Legends",
			image: LeagueofLegends,
		},
		{
			name: "Team Fight Tactics Matches",
			image: TeamFightTactics,
		},
		{
			name: "Legends of Runeterra",
			image: LegendsofRuneterra,
		},
	]);
	return (
		<Container>
			<HorizontalStepper currentStep={currentStep} setStep={setCurrentStep}>
				{games.map((game) => (
					<Games game={game} />
				))}
			</HorizontalStepper>
		</Container>
	);
};

export default Home;
