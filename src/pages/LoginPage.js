import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import Divider from "../components/Divider";
import { Layout } from "../components/Layout";

export default function Loginpage() {
	const history = useNavigate();
	const [btn, setBtn] = useState("#b52b35");
	const [underln, setUnderln] = useState("none");
	const [underLn, setUnderLn] = useState("none");

	const login = {
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
				<h1 style={login.h1}>Login</h1>
				<div style={login.form}>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							// your login logic here
						}}>
						<div style={login.field} id='email'>
							<label style={login.label}>Email address</label>
							<input
								style={login.input}
								name='email'
								type='email'
								// value=' '
								// autoComplete='email'
								required
							/>
						</div>
						<div style={login.field} id='password'>
							<label style={login.label}>Password</label>
							<input
								style={login.input}
								name='password'
								type='password'
								// value=' '
								// autoComplete='password'
								required
							/>
							<button style={{ ...login.forgot, textDecoration: underln }}>
								<Link
									to='/forgot-password'
									style={{...login.forgot, cursor: "pointer",}}
									onMouseOver={() => setUnderln("underline")}
									onMouseOut={() => setUnderln("none")}>
									Forgot password?
								</Link>
							</button>
						</div>
						<button
							style={login.button}
							type='submit'
							onMouseOver={() => setBtn("#911d23")}
							onMouseOut={() => setBtn("#b52b35")}>
							Login
						</button>
					</form>
					<Divider>OR</Divider>
					<button
						style={{
							...login.button,
							backgroundColor: "#fff",
							color: "#b52b35",
						}}
						onClick={() => alert("sign in with google")}>
						<FaGoogle />
						&ensp;Sign in with Google
					</button>
					<div
						style={{
							...login.forgot,
							alignSelf: "center",
							marginTop: "1em",
						}}>
						Don't have an account?&nbsp;
						<button
							style={{
								...login.forgot,
								fontSize: "1em",
								textDecoration: underLn,
								cursor: "pointer",
							}}
							onClick={() => history.push("/register")}
							onMouseOver={() => setUnderLn("underline")}
							onMouseOut={() => setUnderLn("none")}>
							Register
						</button>
					</div>
				</div>
			</Card>
		</Layout>
	);
}
