import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 150px 1fr 330px;
	padding: 12px 140px;
	height: 56px;
	width: 100vw;
	max-width: 1400px;
	margin: 0 auto !important;

	background-color: #fff;
	z-index: 999999999999999999999999999999999999999999999999;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;
	h1 {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /
			var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-3f3f46);
		text-align: left;
		font: normal normal normal 18px/27px Poppins;
		letter-spacing: 0px;
		color: #3f3f46;
	}
	.right {
		display: grid;
		grid-template-columns: 80px 80px;
		grid-gap: 40px;
	}
	.outline-red {
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
		border: 1px solid var(---d44244);
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #d44244;
		border-radius: 15px;
		width: 100%;
		height: 31px;
		border: 1px solid #d44244;
		text-align: center;
		padding-top: 6px;
		color: #d44244;
		border-radius: 8px;
		padding-top: 4px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
			var(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		font: normal normal bold 14px/21px Poppins;
		letter-spacing: 0.02px;
	}
	.fill-red {
		background: var(---d44244) 0% 0% no-repeat padding-box;
		background: #d44244 0% 0% no-repeat padding-box;
		border-radius: 15px;
		width: 100%;
		height: 31px;
		background-color: #d44244;
		text-align: center;
		color: #fff;
		border-radius: 8px;
		padding-top: 4px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
			var(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		font: normal normal bold 14px/21px Poppins;
		letter-spacing: 0.02px;
	}
	@media screen and (max-width: 600px) {
		height: fit-content;
		max-height: 15vh;
		padding: 10px;
		grid-template-columns: 100px 1fr;
		max-width: 100vw;

		.right {
			display: flex;
			justify-content: space-between;
			width: 95vw;
			margin-top: 15px;
		}
	}
`;
