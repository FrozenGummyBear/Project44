import React from "react";
import { Container } from "./CurrencyStore.style";
import Metro from "../../assets/Currency-page/Icon-metro-coins.png";
import Coins from "../../assets/Currency-page/Icon-awesome-coins.png";

function CurrencyStore({ img, pog, price, handleOpen }) {
	return (
		<Container onClick={handleOpen}>
			<img src={img ? Metro : Coins} alt={img} />
			<h3 className='pogs'>{pog} pogs</h3>
			<p className='price'>$ {price}</p>
		</Container>
	);
}

export default CurrencyStore;
