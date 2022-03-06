import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/init-firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
	confirmPasswordReset,
} from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext({
	currentUser: null,
	Register: () => Promise,
	Login: () => Promise,
	SignInWithGoogle: () => Promise,
	ForgotPassword: () => Promise,
	ResetPassword: () => Promise,
	Logout: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	function Register(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function Login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function SignInWithGoogle() {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	}

	function ForgotPassword(email) {
		return sendPasswordResetEmail(auth, email, {
			url: history.push('/login'),
		});
	}

	function ResetPassword(oobCode, newPassword) {
		return confirmPasswordReset(auth, oobCode, newPassword)
	}

	function Logout() {
		return signOut(auth);
	}

	const value = {
		currentUser,
		Register,
		Login,
		SignInWithGoogle,
		ForgotPassword,
		ResetPassword,
		Logout,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
