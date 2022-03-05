import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import Divider from "../components/Divider";
import { Layout } from "../components/Layout";
import { useAuth } from '../contexts/AuthContext';
import UseMounted from '../hooks/UseMounted';

export default function Loginpage() {
	const history = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	// const toast = useToast();

	const mounted = UseMounted();

	const { Login, SignInWithGoogle } = useAuth();

	const [btn, setBtn] = useState('#b52b35');
	const [underln, setUnderln] = useState('none');
	const [underLn, setUnderLn] = useState('none');

	const login = {
		h1: {
			fontSize: '3.5em',
			marginBottom: '.5em',
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
		},
		field: {
			display: 'flex',
			flexDirection: 'column',
			marginBottom: '.7em',
		},
		label: {
			color: '#fffb',
			fontSize: '.8em',
			marginBottom: '.64em',
		},
		input: {
			backgroundColor: '#fff3',
			border: '1px solid #fff7',
			borderRadius: '.5em',
			padding: '.65em .8em',
			fontSize: '1em',
			outline: 'none',
			fontFamily: 'inherit',
			color: '#fff',
		},
		forgot: {
			alignSelf: 'flex-end',
			backgroundColor: 'transparent',
			color: '#fffb',
			textDecoration: 'none',
			outline: 'none',
			fontSize: '.9em',
			fontFamily: 'inherit',
			border: 'none',
		},
		button: {
			width: '100%',
			outline: 'none',
			padding: '.5em',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			border: 'none',
			borderRadius: '.5em',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: btn,
			boxShadow: '1px 1px 5px #0003',
			color: '#fff',
			cursor: 'pointer',
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
							if (!email || !password) console.log('Enter email and password');
							setIsSubmitting(true);
							Login(email, password)
								.then((response) => {
									console.log(response);
									history('/profile');
								})
								.catch((error) => {
									console.log(error.message);
								})
								.finally(() => mounted.current && setIsSubmitting(false));
						}}>
						<div style={login.field} id='email'>
							<label style={login.label}>Email address</label>
							<input
								style={login.input}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
								style={{ ...login.input, marginBottom: '.3em' }}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name='password'
								type='password'
								// value=' '
								// autoComplete='password'
								minLength='8'
								required
							/>
							<button style={{ ...login.forgot, textDecoration: underln }}>
								<Link
									to='/forgot-password'
									style={{ ...login.forgot, cursor: 'pointer' }}
									onMouseOver={() => setUnderln('underline')}
									onMouseOut={() => setUnderln('none')}>
									Forgot password?
								</Link>
							</button>
						</div>
						<button
							style={login.button}
							type='submit'
							onMouseOver={() => setBtn('#911d23')}
							onMouseOut={() => setBtn('#b52b35')}>
							{isSubmitting ? '...' : 'Login'}
						</button>
					</form>
					<Divider>OR</Divider>
					<button
						style={{
							...login.button,
							backgroundColor: '#fff',
							color: '#b52b35',
						}}
						onClick={() => {
							SignInWithGoogle()
								.then((user) => {
									console.log(user);
								})
								.catch((error) => {
									console.log(error);
								});
						}}>
						<FaGoogle />
						&ensp;Sign in with Google
					</button>
					<div
						style={{
							...login.forgot,
							alignSelf: 'center',
							marginTop: '1em',
						}}>
						Don't have an account?&nbsp;
						<button
							style={{
								...login.forgot,
								fontSize: '1em',
								textDecoration: underLn,
								cursor: 'pointer',
							}}>
							<Link
								to={'/register'}
								style={{ ...login.forgot, fontSize: '1em' }}
								onMouseOver={() => setUnderLn('underline')}
								onMouseOut={() => setUnderLn('none')}>
								Register
							</Link>
						</button>
					</div>
				</div>
			</Card>
		</Layout>
	);
}
