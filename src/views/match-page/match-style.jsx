import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: calc(100vh -100px);
	padding: 20px 140px;
	max-width: 1400px;
	margin: 0 auto !important;

	padding-bottom: 100px;
	.main-div {
		display: flex;
		justify-content: space-between;
	}
	.left-div {
		flex: 3;
	}
	.right-div {
		padding-top: 20px;
		flex: 1;

		/* padding: 10px auto; */
		padding-left: min(59px);
	}
	.red {
		background: var(---d44244) 0% 0% no-repeat padding-box;
		background: #d44244 0% 0% no-repeat padding-box;
		border-radius: 15px;
		border: none;
		/* padding: 6px !important; */
		/* margin-bottom: 10px; */
		text-align: left;
		font: normal normal bold 14px/21px Poppins;
		letter-spacing: 0.02px;
		color: #ffffff;
		opacity: 1;
		width: 80px;
		margin-right: 10px;
		text-align: center;
		text-decoration: none;
		width: 104px;
		height: 31px;
		background: #ca3a31 0% 0% no-repeat padding-box;
		border-radius: 8px;
	}
	.back {
		text-align: left;
		font: normal normal 300 13px/24px Poppins;
		letter-spacing: 0px;
		color: #717179;

		/* text-decoration: underline; */

		opacity: 1;
	}

	.match-row span {
		margin: auto 5px;
	}
	.sub-row {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.match-row span {
		flex: 1;
	}

	.sub-row span {
		flex: 1;
	}
	.edit {
		text-align: left;
		font: normal normal bold 16px/24px Poppins;
		letter-spacing: 0px;
		color: #4e80ee;
		opacity: 1;
		margin: auto 10px;
		cursor: pointer;
	}
	.match-name {
		display: inline-block;
		text-align: left;
		font: normal normal bold 24px/51px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
		opacity: 1;
	}
	.sub-title {
		font: normal normal bold 16px/25px Poppins;
		letter-spacing: 0px;
		margin: 0;
		padding: 0;
		color: #0a0a0a;
	}
	.hero {
		margin-top: 33.6px;
		height: 450px;
		object-fit: cover;
		width: 100%;
		border: 1px solid #707070;
		opacity: 1;
	}
	p {
		margin-top: 14px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
		opacity: 1;
	}
	/* 
/////////////////////////////////////////////////////////////////////////////////
*/
	.right-header {
		text-align: left;
		margin-bottom: 32px;
		font: normal normal bold 16px/25px Poppins;
		letter-spacing: 0px;
		font-weight: 800;
		color: #0a0a0a;
	}
	.user-container {
		/* max-width: 256px; */
		/* height: 40px; */
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid black;
		border-radius: 5px;
		padding: 10px 16px;
		box-shadow: -3px 3px black;
	}
	.player-profile {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.user-name {
		font: normal normal medium 14px/21px Poppins;
		letter-spacing: 0.01px;
		font-weight: 500;
		color: #3f3f46;
	}
	/* 
/////////////////////////////////////////////////////////////////////////////////
*/

	@media screen and (max-width: 600px) {
		padding: 30px;
		.match-row {
			display: flex;
			flex-direction: column;
		}
		.match-name {
			text-align: center !important;
			width: 100%;
		}
		.sub-row {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 10px;
			margin: 20px 0;
		}
	}
`;
