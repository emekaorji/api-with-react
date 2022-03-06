import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Outlet,
	useLocation,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import ProtectedPage from '../pages/ProtectedPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import NotFoundPage from '../pages/NotFoundPage';
import { useAuth } from '../contexts/AuthContext';

export default function AppRouter(props) {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<ProtectedRoute exact path='/login' component={LoginPage} />
					<ProtectedRoute exact path='/register' component={SignupPage} />

					<ProtectedRoute exact path='/profile' component={ProfilePage} />
					<ProtectedRoute exact path='/protected' component={ProtectedPage} />

					<ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
					<ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
					<Route exact path='*' component={NotFoundPage} />
				</Switch>
			</Router>
		</>
	);
}

function ProtectedRoute(props) {
	const { currentUser } = useAuth();
	const { path } = props;
	const location = useLocation();

	if (
		path === '/login' ||
		path === '/register' ||
		path === '/forgot-password' ||
		path === '/reset-password'
	) {
		return currentUser ? (
			<Redirect to={location.state?.from ?? '/profile'} />
		) : (
			<Route {...props} />
		);
	}

	return currentUser ? (
		<Route {...props} />
	) : (
		<Redirect
			to={{
				pathname: '/login',
				state: { from: path },
			}}
		/>
	);
}