import styled from "styled-components";

export const Container = styled.div`
	.hero {
		width: 100vw;
		height: 400px;
		object-fit: cover;
	}
`;

export const Matches = styled.div`
	width: 100%;
	padding: 32px 140px;

	max-width: 1400px;
	margin: 0 auto !important;

	.match-head {
		display: flex;
	}
	.title {
		text-align: left;
		font: normal normal bold 24px/51px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
		line-height: 24px;
		padding-top: 4px;
	}
	.filter {
		margin: 6px 20px;
		text-align: center;
		font: normal normal 300 14px/21px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
	}

	.match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}
	@media screen and (max-width: 600px) {
		padding: 50px 5%;
		.match-list {
			grid-template-columns: 1fr;
			max-width: 90vw;
		}
	}
`;

export const FilterButtonsContainer = styled.div`
	width: 150px;
	height: 32px;
	font-display: grid;
	grid-template-columns: 1fr 1fr;
	background: var(--unnamed-color-fafafa) 0% 0% no-repeat padding-box;
	border: 1px solid var(--unnamed-color-3b82f6);
	background: #fafafa 0% 0% no-repeat padding-box;
	border: 1px solid #3b82f6;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	button {
		border: none;
		color: #a1a1aa;
		width: 78px;
		height: 100%;
		/* UI Properties */
		background-color: transparent;
		text-align: center;
		font: normal normal 300 13px/20px Poppins;
		letter-spacing: 0.02px;
	}
	.selected {
		background: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;
		background: #3b82f6 0% 0% no-repeat padding-box;
		color: #fff;
		font: normal normal bold 13px/20px Poppins;
		/* border-radius: 8px 0px 0px 8px; */
	}
`;
