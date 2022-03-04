import React, { useState } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";

export default function NavLink({
	to,
	name,
	uniqueStyle,
	extraStyle,
	color,
	initColor = color || "transparent",
	...rest
}) {
	const location = useLocation();
	const isActive = location.pathname === to;

	const [bg, setBg] = useState(initColor);
	const [press, setPress] = useState("1");

	const nav = {
		container: {
			border: isActive ? "1px solid #fffc" : "none",
			backgroundColor: isActive ? "#fff4" : `${bg}`,
			color: "#fff",
			fontSize: "1em",
			fontFamily: "'Poppins', san-serif",
			padding: ".7em",
			borderRadius: ".5em",
			transform: `scale(${press})`,
			transition: "all 100ms ease",
			cursor: 'pointer',
			...uniqueStyle,
		},
	};

	return (
		<Link to={to} style={{ textDecoration: "none", ...extraStyle }}>
			<button
				{...rest}
				onMouseOver={() => setBg("#fff3")}
				onMouseOut={() => setBg(initColor)}
				onMouseDown={() => setPress(".975")}
				onMouseUp={() => setPress("1")}
				style={nav.container}>
				{name}
			</button>
		</Link>
	);
}
