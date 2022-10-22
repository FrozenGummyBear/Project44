import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: calc(100vh -100px);
	margin: 0;
	padding-bottom: 100px;
	.header {
		text-align: left;
		font: normal normal bold 28px/42px Poppins;
		letter-spacing: 0px;
		color: #ef4444;
		padding: 25px 140px;
		max-width: 1400px;

		width: 100vw;
		margin: 0 auto !important;

		display: flex;
		justify-content: space-between;
	}

	.hero {
		width: 100vw;
		height: 400px;
		object-fit: cover;
	}

	@media screen and (max-width: 600px) {
		.header {
			padding: 100px 20px !important;
			flex-direction: column;
			padding-bottom: 30px !important;
		}
	}
`;

export const Matches = styled.div`
	width: 100%;
	margin-top: 50px;
	padding: 20px 140px;
	max-width: 1400px;
	margin: 0 auto !important;

	.match-head {
		display: flex;
	}
	.title {
		font: normal normal bold 30px/46px Poppins;
		color: #000000;
	}
	.filter {
		margin: 13px 20px;
		font: normal normal normal 16px/22px Source Sans Pro;
	}

	.match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 17px;
		margin-top: 30px;
	}
	@media screen and (max-width: 600px) {
		.match-list {
			grid-template-columns: 1fr;
			max-width: 90vw;
		}
	}
`;

export const GameLink = styled.button`
	border: none;
	background-color: transparent;
	text-align: left;
	font: ${(props) =>
		props.active
			? "normal normal bold 28px/42px Poppins"
			: "normal normal 300 28px/42px Poppins"};
	letter-spacing: 0px;
	color: ${(props) => (props.active ? "#ef4444" : "#D4D4D8")};
	opacity: ${(props) => (props.active ? "1" : "0.8")};
`;
