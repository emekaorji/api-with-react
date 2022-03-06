import React, { useState } from "react";
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { useAuth } from '../contexts/AuthContext';
import UseMounted from '../hooks/UseMounted';
import { useToast } from '@chakra-ui/react';

export default function ForgotPasswordPage() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const mounted = UseMounted();
	const { ForgotPassword } = useAuth();
	const toast = useToast();

	const [btn, setBtn] = useState('#b52b35');

	const forgot = {
		h1: {
			fontSize: '3em',
			lineHeight: '1.1em',
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
				<h1 style={forgot.h1}>Forgot password</h1>
				<div style={forgot.form}>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							// your forgot password logic here
							setIsSubmitting(true);
							ForgotPassword(email)
								.then((response) => {
									toast({
										description:
											"We sent you an email, check your inbox. Be sure to check your spam folder incase you don't find it in your inbox",
										status: 'success',
										duration: 10000,
										isClosable: true,
									});
								})
								.catch((error) => {
									toast({
										description:
											'Sorry, we have searched and there is no one with this account',
										status: 'error',
										duration: 5000,
										isClosable: true,
									});
								})
								.finally(() => mounted.current && setIsSubmitting(false));
						}}>
						<div>
							<div style={forgot.field} id='email'>
								<label style={forgot.label}>Email address</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									style={forgot.input}
									name='email'
									type='email'
									autoComplete='email'
									required
								/>
							</div>
							<button
								style={forgot.button}
								type='submit'
								onMouseOver={() => setBtn('#911d23')}
								onMouseOut={() => setBtn('#b52b35')}>
								{isSubmitting ? (
									<UseAnimations
										strokeColor={'yellow'}
										speed={3}
										animation={loading}
									/>
								) : (
									'Sign up'
								)}
							</button>
						</div>
					</form>
				</div>
			</Card>
		</Layout>
	);
}
