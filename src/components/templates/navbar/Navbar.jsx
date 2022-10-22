import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { apiCall2 } from "../../../api/ApiCall";

import { Container } from "./NavbarStyle";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	background: "#F0F0F0",
	borderRadius: "8px",
	height: "31px",
	maxWidth: "376px!important",
	padding: "5px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	fontSize: "22px",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: "10px",
	top: "5px",
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

const Navbar = () => {
	return (
		<Container>
			<Link to='/home'>
				<h1>PEWPOG</h1>
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
			<div className='right'>
				<Link to='/' className='outline-red'>
					Log In
				</Link>
				<Link to='/sign-up' className='fill-red'>
					Sign up
				</Link>
			</div>
		</Container>
	);
};
export default Navbar;
