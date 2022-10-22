import { Container } from "./Match.styles";
import React from "react";
import avatar from "../../assets/person.png";
import { Link } from "react-router-dom";
const Match = ({ handleOpen, game }) => {
	return (
		<Container>
			<div className='space'>
				<p className='date'>
					{game.matchDate.substring(8, 10)}.{game.matchDate.substring(5, 7)}.
					{game.matchDate.substring(0, 4)}
				</p>
				<p className='bold'>Loot:{game.lootAmount} pogs</p>
			</div>
			<div className='space'>
				<p className='date'></p>
			</div>
			<Link to='/match' className='name'>
				{game.matchName}
			</Link>
			<p className='bold'>Pledge: {game.pledge} pogs</p>
			<div className='space'>
				<button className='red' onClick={() => handleOpen(game._id)}>
					Join
				</button>
				<div className='user'>
					<img src={avatar} alt='' className='avatar' />
					<p>Username</p>
				</div>
			</div>
		</Container>
	);
};

export default Match;
