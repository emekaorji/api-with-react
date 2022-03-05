import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/init-firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';

const AuthContext = createContext({
	currentUser: null,
	Register: () => Promise,
	Login: () => Promise,
	Logout: () => Promise,
	SignInWithGoogle: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

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

	function Logout() {
		return signOut(auth);
	}

	const value = {
		currentUser,
		Register,
		Login,
		Logout,
		SignInWithGoogle,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
