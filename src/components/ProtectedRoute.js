import React from 'react';
import { Redirect, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, props }) {
	const { currentUser } = useAuth();

  return (
		<Route
			{...props}
			render={({ location }) =>
				currentUser ? (
					children
				) : (
					<Redirect
						replace
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
	// const { path } = props;

	// return currentUser ? (
	// 	<Outlet />
	// ) : (
	// 	<Redirect
	// 		replace
	// 		to={{
	// 			pathname: '/login',
	// 			state: { from: path },
	// 		}}
	// 	/>
	// );
}
