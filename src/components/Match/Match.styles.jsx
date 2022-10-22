import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 10px #0000001f;
	border-radius: 10px;
	opacity: 1;
	padding: 16px 24px;
	box-shadow: -3px 3px 0px #27272a;
	border: 2px solid #27272a;

	.space {
		display: flex;
		justify-content: space-between;
	}
	.name {
		text-align: left;
		font: normal normal 600 16px/25px Poppins;
		letter-spacing: 0.01px;
		color: #ef4444 !important;
	}
	.date {
		text-align: left;
		font: normal normal medium 14px/21px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
	}
	.bold {
		text-align: left;
		font: normal normal medium 14px/21px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
	}
	.user {
		display: flex;
		p {
			margin-left: 10px;
		}
		img {
			width: 20px;
			height: 20px;
		}
	}
	.red {
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
	@media screen and (max-width: 600px) {
		width: 87vw;
	}
`;
