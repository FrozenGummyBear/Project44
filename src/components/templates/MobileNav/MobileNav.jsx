import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillGearFill, BsFillPersonPlusFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
import AddMembers from "../../AddMembers/AddMembers.component.jsx";
import SoloModal from "../../SoloModal/SoloModal.component.jsx";
import TeamModal from "../../TeamModal/TeamModalOne.component.jsx";
import { Container } from "./MobileNav.styles.jsx";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	background: "#F0F0F0",
	borderRadius: "10px",
	height: "40px",
	maxWidth: "95%!important",
	padding: "10px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	fontSize: "22px",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: "20px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	fontSize: "22px",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: "0",
		fontSize: "14px",
		paddingLeft: "10px",
		transition: theme.transitions.create("width"),
		width: "100%",
	},
}));

const MobileNav = (props) => {
	const [open, setOpen] = useState(false);
	const [solo, setSolo] = useState(false);
	const [team, setTeam] = useState(false);
	const [addMembers, setAddMembers] = useState(false);
	const openSolo = () => {
		setSolo(true);
		setTeam(false);
		setAddMembers(false);
	};
	const openMembers = () => {
		setSolo(false);
		setTeam(false);
		setAddMembers(true);
	};
	const openTeam = () => {
		setTeam(true);
		setSolo(false);
		setAddMembers(false);
	};
	const onClose = () => {
		setTeam(false);
		setSolo(false);
		setAddMembers(false);
	};
	const onNext = () => {
		setTeam(false);
		setSolo(false);
		setAddMembers(true);
	};
	return (
		<Container style={{ display: (solo || team || addMembers) && "none" }}>
			<Link to='/home'>
				<h1 className='logo'>PEWPOG</h1>
			</Link>
			<Search>
				<SearchIconWrapper>
					<BiSearchAlt2 />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Search…'
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>

			{open && (
				<div className='menu'>
					<Link
						to='/currency-store'
						onClick={() => {
							setOpen(!open);
						}}
					>
						<FaCoins style={{ marginRight: "10px" }} /> Buy pogs
					</Link>
					<Link
						to='/setting'
						onClick={() => {
							setOpen(!open);
						}}
					>
						<BsFillGearFill style={{ marginRight: "10px" }} /> Account settings
					</Link>
				</div>
			)}
			<button className='person' onClick={() => setOpen(!open)}>
				<IoPersonCircleSharp />
			</button>
			<div className='right'>
				<button className='outline-red' onClick={openSolo}>
					Solo Match
				</button>
				<button className='fill-red' onClick={openTeam}>
					Team Match
				</button>
			</div>
			<SoloModal open={solo} setOpen={openSolo} onClose={onClose} />
			<TeamModal
				open={team}
				setOpen={openTeam}
				onClose={onClose}
				onNext={onNext}
			/>
			<AddMembers open={addMembers} setOpen={openMembers} onClose={onClose} />
		</Container>
	);
};
export default MobileNav;
