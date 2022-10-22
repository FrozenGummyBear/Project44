import styled from "styled-components";

export const Contanier = styled.div`
	max-width: 100%;
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-columns: 321px 1fr;
	/* grid-gap: 74px; */
	margin: 0px auto;
	margin-right: 50px;
	padding: 0 !important;
	.header {
		height: 100%;
		position: fixed;
		top: 75px;
		padding-top: 80px;
		border: none;
		margin-top: -19px;
		border-right: 1px solid #d4d4d8;
		padding-right: 50px;

		h1 {
			text-align: left;
			font: normal normal bold 24px/51px Poppins;
			color: #3f3f46;
		}
	}

	.nav {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: left;
		margin-top: 50px;
	}
	@media screen and (max-width: 600px) {
		.nav {
			margin-top: 10px;
		}
	}
	.tab {
		text-align: left;
		font: normal normal normal 21px/32px Poppins;
		letter-spacing: 0px;
		color: #0a0a0a;
		background-color: transparent;
		border: none;
		margin-bottom: 33px;
	}
	.active {
		text-align: left;
		font: normal normal bold 21px/31px Poppins;
		letter-spacing: 0px;
		color: #4e80ee;
	}
	.content {
		padding-top: 80px;
	}

	.content h1 {
		margin-bottom: 24px;
		text-align: left;
		font: normal normal normal 30px/46px Poppins;
		letter-spacing: 0.01px;
		color: #000000;
	}
	.content .profile-container {
		margin-bottom: 34px;
	}
	.edit__link {
		text-align: left;
		font: normal normal bold 16px/24px Poppins;
		letter-spacing: 0px;
		color: #4e80ee;
		width: 100%;
	}
	.content .general-icon {
		text-align: center;
		display: block;
		width: 100px;
	}
	.content {
		display: flex;
	}
	.nestd-container {
		display: flex;

		flex-flow: column;
		width: 100%;
	}
	.row-user {
		display: flex;
		margin-top: 25px;
	}
	.content .nestd-container .row-user .field-name {
		flex: 1;
		min-width: 120px;
		margin-right: 20px;

		text-align: left;
		font: normal normal normal 16px/25px Poppins;
		letter-spacing: 0px;
		color: #0a0a0a;
		opacity: 1;
	}
	.content .nestd-container .row-user .field-value {
		flex: 1;
		text-align: left;
		font: normal normal normal 16px/25px Poppins;
		letter-spacing: 0px;
		color: #0a0a0a;
		opacity: 1;
	}
	.content .nestd-container .row-user .edit-link {
		flex: 1;
		text-align: left;
		font: normal normal bold 16px/24px Poppins;
		letter-spacing: 0px;
		color: #4e80ee;
		opacity: 1;
	}

	.content .match-history-content {
		margin-top: 72px;
	}
	.content .match-history-content .row {
		display: flex;
		margin-bottom: 20px;
	}
	.content .match-history-content .row span {
		flex: 1;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-17) /
			var(--unnamed-line-spacing-26) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 17px/26px Poppins;
		letter-spacing: 0px;
		color: #000000;
		opacity: 1;
	}
	.upcoming-matches .match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 17px;
		margin-top: 30px;
	}
	button.red {
		width: 104px;
		height: 31px;
		border: none;
		background: var(--unnamed-color-ef4444) 0% 0% no-repeat padding-box;
		background: #ef4444 0% 0% no-repeat padding-box;
		border-radius: 8px;

		text-align: center;
		text-decoration: none;
		float: right;

		font: normal normal bold 14px/21px Poppins;
		letter-spacing: 0.02px;
		color: #ffffff;
	}
	button.cash {
		margin-top: 35px;
		width: 140px;
		height: 40px;
		border: none;
		background: var(---d44244) 0% 0% no-repeat padding-box;
		background: #d44244 0% 0% no-repeat padding-box;
		border-radius: 15px;
		opacity: 1;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #ffffff;
		background: #3b82f6 0% 0% no-repeat padding-box;
		border-radius: 8px;
		background: #3b82f6 0% 0% no-repeat padding-box;
		border-radius: 8px;
		opacity: 1;
	}
	div.cash-text {
		text-align: left;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
		opacity: 1;
	}
	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		margin: 0px auto;
		margin-right: 50px;
		padding: 0 !important;

		.header {
			border-right: none;
			position: relative;
			border-bottom: 1px solid #707070;
			padding: 0;
			text-align: center !important;
			margin-top: 0px;
		}
	}
	@media screen and (max-width: 600px) {
		.content .match-history-content .table-header {
			display: none;
		}
		.content .row-user {
			display: flex;
			flex-direction: column;
		}

		.content {
			padding-top: 100px;
		}
	}
`;
