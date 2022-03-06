import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Card } from '../components/Card';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@chakra-ui/react';

function useQuery() {
	const location = useLocation();
	return new URLSearchParams(location.search);
}

export default function ResetPasswordPage() {
	const { ResetPassword } = useAuth();
	const query = useQuery();

	const [newPassword, setNewPassword] = useState('');
	const toast = useToast();
	const history = useHistory();

	const [btn, setBtn] = useState('#b52b35');

	const reset = {
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
				<h1 style={reset.h1}>Reset password</h1>
				<div style={reset.form}>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							// handle reset password
							ResetPassword(query.get('oobCode'), newPassword)
								.then((response) => {
									toast({
										description: 'Your password has been changed',
										status: 'success',
										duration: 9000,
										isClosable: true,
									});
									history.push(query.get('continueUrl'));
								})
								.catch((error) => {
									toast({
										description:
											'Password could NOT be changed, should be 8 characters long or the link may have expired',
										status: 'error',
										duration: 9000,
										isClosable: true,
									});
								});
						}}>
						<div>
							<div style={reset.field} id='password'>
								<label style={reset.label}>New password</label>
								<input
									value={newPassword}
									onChange={(e) => setNewPassword(e.target.value)}
									style={reset.input}
									type='password'
									autoComplete='password'
									required
								/>
							</div>
							<button
								style={reset.button}
								onMouseOver={() => setBtn('#911d23')}
								onMouseOut={() => setBtn('#b52b35')}
								type='submit'>
								Reset password
							</button>
						</div>
					</form>
				</div>
			</Card>
		</Layout>
	);
}
