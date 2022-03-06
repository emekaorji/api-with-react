import React from "react";
import NavLink from "./NavLink";
import { useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
	const history = useHistory();

	const { currentUser, Logout } = useAuth();

	const navBar = {
		container: {
			width: '100%',
			padding: '1.4em 1.7em',
			borderBottom: '1px solid #fffb',
			position: 'absolute',
			top: 0,
			display: 'flex',
			justifyContent: 'space-between',
			backgroundColor: '#0004',
			backdropFilter: 'blur(10px)',
			zIndex: 999,
		},
		navContainer: {
			gap: '7px',
			display: 'flex',
			justifyContent: 'space-between',
		},
		logo: {
			border: '1px solid #fff8',
			// background: '#F5F5DC',
			background: '#fff2',
		},
	};
	return (
		<div style={navBar.container}>
			<NavLink
				to='/'
				name='Firebase Authentication'
				uniqueStyle={navBar.logo}
				color='#fff2'
			/>
			<div style={navBar.navContainer}>
				{!currentUser && <NavLink to='/login' name='Login' />}
				{!currentUser && <NavLink to='/register' name='Register' />}
				{currentUser && <NavLink to='/profile' name='Profile' />}
				{currentUser && <NavLink to='/protected' name='Protected' />}
				{currentUser && (
					<NavLink
						to='/logout'
						name='Logout'
						onClick={async (e) => {
							e.preventDefault();
							// handle logout
							Logout();
						}}
					/>
				)}
			</div>
		</div>
	);
}
