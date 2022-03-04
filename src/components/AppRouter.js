import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedPage from "../pages/ProtectedPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter(props) {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<SignupPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/protected' element={<ProtectedPage />} />
					<Route path='/forgot-password' element={<ForgotPasswordPage />} />
					<Route path='/reset-password' element={<ResetPasswordPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	);
}
