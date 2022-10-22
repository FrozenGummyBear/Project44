import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 50px;
	padding: 80px 140px;
	max-width: 1400px;
	margin: 0 auto !important;

	.title {
		text-align: left;
		font: normal normal bold 30px/46px Poppins;
		letter-spacing: 0px;
		color: #4a4a4a;
	}
	.pages {
		display: grid;
		grid-template-columns: repeat(6, 180px);
		grid-gap: 16px;
		margin-top: 71px;
	}

	@media (max-width: 768px) {
		.pages {
			display: grid;
			grid-template-columns: 1fr;
			padding-top: 0px;
			margin-top: 30px !important;
			gap: 30px;
		}
		margin: 0rem;
		padding: 100px 30px !important;
		max-width: 100vw;
	}
`;
