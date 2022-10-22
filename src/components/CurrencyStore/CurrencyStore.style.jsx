import styled from "styled-components";

export const Container = styled.div`
	background-color: #dc2626;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	box-shadow: 0px 3px 10px #00000029;
	border-radius: 10px;
	padding: 70px 30px;
	color: #fff;

	gap: 16px;
	.price {
		position: absolute;
		bottom: 0;
	}
`;
