import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./match-style";
import avatar from "../../assets/person.png";
import EditMatchModal from "../../components/EditMatchModal/EditMatchComponent";

const MatchPage = () => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};
	return (
		<Container>
			<EditMatchModal open={open} onClose={onClose} />
			<span
				className='back'
				onClick={(e) => {
					e.preventDefault();
					history.goBack();
				}}
			>
				Back
			</span>
			<div className='main-div'>
				<div className='left-div'>
					<div className='match-row'>
						<h1 className='match-name'>A Really Long Title Match Name</h1>
						<span>
							<span className='sub-title'>Game:</span>Valorant
						</span>
						<span>
							<span className='sub-title'>Date:</span>07.01.222
						</span>
						<span>
							<span className='sub-title'>Loot:</span>3,000 pogs
						</span>
					</div>
					<div className='sub-row'>
						<button className='red'>joined</button>
						<span className='edit' onClick={() => setOpen(true)}>
							Edit
						</span>
					</div>

					<div className='hero'></div>
					<p>
						The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
						quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
						quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
						grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
						vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
						Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
						quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
						my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
						Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
						Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart
						jug of bad milk. A very bad quack might jinx zippy fowls. Few quips
						galvanized the mock jury box. Quick brown dogs jump over the lazy
						fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red
						vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for
						luck. A wizard’s job is to vex chumps quickly in fog. Watch
						"Jeopardy!", Alex Trebek"s fun TV quiz game.
					</p>
				</div>
				<div className='right-div'>
					<h1 className='right-header'>Registered Players</h1>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
						<div className='user-container'>
							<span className='user'>
								<img src={avatar} alt='' className='player-profile' />
								<span className='user-name'>Username</span>
							</span>
							{el == 1 && (
								<span
									style={{
										color: "#DD524C",
										font: "normal normal medium 13px/24px Poppins",
									}}
								>
									Host
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};
export default MatchPage;
