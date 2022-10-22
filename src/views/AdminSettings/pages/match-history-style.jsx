import styled from "styled-components";

export const CustomeTable = styled.table`
	border-collapse: collapse;
	margin: 0;
	margin-bottom: 100px;
	padding: 0;
	width: 100%;
	table-layout: fixed;
	@media screen and (max-width: 600px) {
		margin-bottom: 10px;
	}
	caption {
		font-size: 1.5em;
		margin: 0.5em 0 0.75em;
		caption-side: top;
		text-align: left;
		font: normal normal normal 23px/51px Poppins;
		letter-spacing: 0.01px;
		color: #3f3f46;
		opacity: 1;
	}

	tr {
		border-bottom: 1px solid #9d9d9d3b;
		padding: 0.35em;
	}
	tbody tr:last-child {
		border-bottom: 0;
	}
	th,
	td {
		padding: 0.625em;
		vertical-align: top;
		text-align: left;
		font: normal normal normal 16px/25px Poppins;
		letter-spacing: 0px;
		color: #0a0a0a;
	}

	th {
		/* font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase; */
		text-align: left;
		font: normal normal bold 16px/25px Poppins;
		letter-spacing: 0px;
		color: #0a0a0a;
		opacity: 1;
	}

	@media screen and (max-width: 978px) {
		border: 0;

		caption {
			font-size: 1.3em;
		}

		thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		tr {
			border-bottom: 3px solid #ddd;
			display: block;
			margin-bottom: 0.625em;
		}

		td {
			border-bottom: 1px solid #ddd;
			display: block;
			font-size: 0.8em;
			text-align: right;
		}

		td::before {
			/*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		}

		td:last-child {
			border-bottom: 0;
		}
	}
`;
