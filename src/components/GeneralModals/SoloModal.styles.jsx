import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	height: 100%;
	text-align: center;
	.close {
		position: absolute;
		top: 0;
		right: -20px;
		color: #fff;
	}
	@media screen and(max-width:600px) {
		.close {
			right: 20px;
			color: black;
			z-index: 999999999999;
		}
	}
	.title {
		text-align: center;
		font: normal normal normal 23px/34px Poppins;
		letter-spacing: 0px;
		color: #000000;
	}
	.sub-title {
		text-align: center;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
	}

	.select:after {
		color: red !important;
	}
	.input-title {
		margin-bottom: 2px;
	}

	.sub-title {
		font-size: 16px;
	}
	@media screen and (max-width: 600px) {
		max-width: 90vw;
	}
	.info {
		position: relative;
	}
	.colu {
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.menu {
		position: absolute;
		top: -6px;
		padding: 8px !important;
		right: 5px;

		width: 200px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background: #27272a 0% 0% no-repeat padding-box;
		border-radius: 4px;
		color: #fff;
		&:before {
			content: "";
			width: 15px;
			height: 15px;
			background: #27272a 0% 0% no-repeat padding-box;
			z-index: -99999;
			position: absolute;
			top: 8px;
			left: -2px;
			transform: rotate(45deg);
		}
	}
	p {
		font-size: 14px;
	}
	.short-field-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.short-field-container input {
		background-color: #ffffff;
		border: 1px solid #707070;
	}
	.short-field-container span {
		margin: auto 10px;
	}
	.wallet {
		text-align: left;
		margin: 30px auto;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: fit-content;
	margin-top: 24px;
	text-align: left;
	color: ${(props) =>
		props.error === "invalid"
			? " #DC2626!important"
			: props.error === "valid"
			? " #4F8CE3"
			: "none"};
	.input {
		width: 320px !important;

		height: 32px;
		background: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;
		background: #f4f4f5 0% 0% no-repeat padding-box;
		border-radius: 5px;
		border: ${(props) =>
			props.error === "invalid"
				? "1px solid #DC2626!important"
				: props.error === "valid"
				? "1px solid #4F8CE3"
				: "none"};

		padding: 5px;
		&:focus {
			outline: none;
		}
	}

	.input__second {
		width: 100% !important;

		height: 32px;
		background: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;
		background: #f4f4f5 0% 0% no-repeat padding-box;
		border-radius: 5px;
		border: ${(props) =>
			props.error === "invalid"
				? "1px solid #DC2626!important"
				: props.error === "valid"
				? "1px solid #4F8CE3"
				: "none"};

		padding: 5px;
		margin-top: 10px;
		&:focus {
			outline: none;
		}
	}
	.warning {
		display: ${(props) => (props.error === "invalid" ? "block" : "none")};
	}
`;

export const Button = styled.div`
	width: 320px;
	height: 31px;
	background: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;
	background: #2865b3 0% 0% no-repeat padding-box;
	border-radius: 8px;
	border: none;
	color: #fff;
	padding-top: 4px;
	margin: 0 auto;
	margin-top: 32px;
	cursor: pointer;
	font: normal normal bold 14px/21px Poppins;
	letter-spacing: 0.02px;
	background: #f2f2f3 0% 0% no-repeat padding-box;
	border-radius: 8px;
	text-align: center;
	font: normal normal bold 14px/21px Poppins;
	letter-spacing: 0.02px;
	color: #a1a1aa;
	opacity: 1;
`;
