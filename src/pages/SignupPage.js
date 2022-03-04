import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import Divider from "../components/Divider";
import { Layout } from "../components/Layout";

export default function Registerpage() {
	const history = useNavigate();
	const [btn, setBtn] = useState("#b52b35");
	const [underln, setUnderln] = useState("none");

	const signup = {
		h1: {
			fontSize: "3.5em",
			marginBottom: ".5em",
		},
		form: {
			display: "flex",
			flexDirection: "column",
		},
		field: {
			display: "flex",
			flexDirection: "column",
			marginBottom: ".7em",
		},
		label: {
			color: "#fffb",
			fontSize: ".8em",
			marginBottom: ".64em",
		},
		input: {
			backgroundColor: "#fff3",
			border: "1px solid #fff7",
			borderRadius: ".5em",
			padding: ".65em .8em",
			fontSize: "1em",
			outline: "none",
			fontSize: "inherit",
			fontFamily: "inherit",
			color: "#fff",
		},
		forgot: {
			alignSelf: "flex-end",
			backgroundColor: "transparent",
			color: "#fffb",
			textDecoration: "none",
			outline: "none",
			fontSize: ".9em",
			fontFamily: "inherit",
			border: "none",
		},
		button: {
			width: "100%",
			outline: "none",
			padding: ".5em",
			fontSize: "inherit",
			fontFamily: "inherit",
			border: "none",
			borderRadius: ".5em",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: btn,
			boxShadow: "1px 1px 5px #0003",
			color: "#fff",
			cursor: "pointer",
		},
	};

	return (
		<Layout>
			<Card>
				<h1 style={signup.h1}>Register</h1>
				<div style={signup.form}>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							// your register logic here
						}}>
						<div style={signup.field} id='email'>
							<label style={signup.label}>Email address</label>
							<input
								style={signup.input}
								name='email'
								type='email'
								autoComplete='email'
								required
							/>
						</div>
						<div style={signup.field} id='password'>
							<label style={signup.label}>Password</label>
							<input
								style={signup.input}
								name='password'
								type='password'
								autoComplete='password'
								required
							/>
						</div>
						<button
							style={signup.button}
							type='submit'
							onMouseOver={() => setBtn("#911d23")}
							onMouseOut={() => setBtn("#b52b35")}>
							Sign up
						</button>
					</form>
				</div>
				<Divider my={6}>OR</Divider>
				<button
					style={{
						...signup.button,
						backgroundColor: "#fff",
						color: "#b52b35",
					}}
					onClick={() => alert("sign in with google")}>
					<FaGoogle />
					&ensp;Sign in with Google
				</button>
				<div
					style={{ ...signup.forgot, alignSelf: "center", marginTop: "1em" }}>
					Already have an account?&nbsp;
					<button
						style={{
							...signup.forgot,
							fontSize: "1em",
							textDecoration: underln,
							cursor: "pointer",
						}}
						onClick={() => history.push("/login")}
						onMouseOver={() => setUnderln("underline")}
						onMouseOut={() => setUnderln("none")}>
						Login
					</button>
				</div>
			</Card>
		</Layout>
	);
}
