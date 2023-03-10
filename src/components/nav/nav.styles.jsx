import styled from "styled-components";

import { Link } from "react-router-dom";

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const NavLinks = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	color: #000;
`;

export const NavLinksContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Navigation = styled.div`
	height: 70px;
	width: 100%;

	display: flex;

	position: fixed;
	top: 0;

	justify-content: space-between;
	margin-bottom: 25px;
`;
