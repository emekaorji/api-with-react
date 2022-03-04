import React from "react";
import NavLink from "../components/NavLink";
import { Layout } from "../components/Layout";

export default function HomePage() {

	const home = {
		main: {
			width: "80%",
			fontSize: "2.3rem",
			alignSelf: "center",
			margin: "0 auto",
			display: "flex",
		},
		head: {
			width: "60%",
		},
		h1: {
			lineHeight: "1.1em",
			marginBottom: ".3em",
		},
		p: {
			color: "#fffb",
			fontSize: ".5em",
		},
		button: {
			borderRadius: ".3em",
			fontSize: ".7em",
			fontFamily: "'Poppins', sans-serif",
			width: "100%",
			display: "block",
			margin: "0 auto",
			padding: "2em .7em",
			// marginTop: "2em",
			border: "1px solid #fffa",
			// background: '#F5F5DC',
		},
	};
	return (
		<Layout>
			<div id='homePage' style={home.main}>
				<div style={home.head}>
					<h1 style={home.h1}>
						Whatever happens here, <strong>stays</strong> here
					</h1>
					<p style={home.p}>
						If you leave and I catch you, you will hear wheeen!
					</p>
				</div>
				<NavLink
					to='/login'
					name='Get Started'
					uniqueStyle={home.button}
					color='#fff2'
					extraStyle={{ width: "40%", display: "flex", alignItems: "center" }}
				/>
			</div>
		</Layout>
	);
}
