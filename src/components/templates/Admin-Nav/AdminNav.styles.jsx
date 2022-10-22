import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	display: grid;
	grid-template-columns: 150px 393px 1fr 50px;
	padding: 12px 140px;
	height: 56px;
	width: 100vw;

	background-color: #fff;
	z-index: 999999999999999999999999999999999999999999999999;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 1px 1px #00000029;
	opacity: 1;
	h1 {
		text-align: left;
		font: normal normal normal 18px/27px Poppins;
		letter-spacing: 0px;
		color: #3f3f46;
	}
	.menu {
		position: absolute;
		top: 40px;
		padding: 24px 16px;
		right: -55px;
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 10px #00000029;
		border-radius: 10px;
		width: 192px;
		height: 139px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		a {
			text-align: left;
			font: normal normal bold 17px/24px Source Sans Pro;
			letter-spacing: 0.02px;
			color: #ef4444;
			padding: 0;
			margin: 0;
			background-color: transparent;
			border: none;
		}
	}
	.right {
		display: grid;
		grid-template-columns: 130px 144px 72px;
		grid-gap: 22px;
		margin-left: 47px;
		position: relative;
		justify-self: end;
	}
	.info {
		text-align: center;
		font: normal normal 300 14px/21px Poppins;
		letter-spacing: 0.17px;
		color: #3f3f46;
		padding-top: 10px;
	}
	.red-link {
		width: 100%;
		height: fit-content;

		text-align: left;
		font: normal normal medium 14px/21px Poppins;
		letter-spacing: 0.23px;
		color: #ef4444;
		border: none;
		background-color: transparent;
		padding-top: 9px;
	}
	.person {
		border: none;
		background-color: transparent;
		height: fit-content;
		width: fit-content;
		margin: 10px;
		img {
			width: 20px;
			height: 20px;
		}
	}
	@media screen and (max-width: 600px) {
		height: fit-content;
		max-height: 15vh;
		padding: 10px;
		grid-template-columns: 100px 1fr;
		max-width: 100vw;
		display: none;

		.right {
			display: flex;
			justify-content: space-between;
			width: 95vw;
			margin-top: 15px;
		}
	}
`;
