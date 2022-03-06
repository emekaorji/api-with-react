import React from 'react';
import { useToast } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCTHhN5U312IgASYJt6ZeO_ZmMArvXNU5M",
	authDomain: "login-app-third.firebaseapp.com",
	projectId: "login-app-third",
	storageBucket: "login-app-third.appspot.com",
	messagingSenderId: "364522274265",
	appId: "1:364522274265:web:36eadce46f0edcc9ad2dc8",
	measurementId: "G-J1XDWQRQV9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const CreateNewUser = async (user, userDisplayName) => {
	const toast = useToast();
	if (!user) return;

	const userRef = doc(firestore, `users/${user.uid}`);

	const userAccountDetails = await getDoc(userRef);

	if (!userAccountDetails.exists) {
		try {
			await setDoc(userRef, {
				displayName: userDisplayName,
				email: user,
				createdAt: new Date(),
			});
		} catch (error) {
			toast({
				title: 'Error',
				description: 'Error! User could not be created',
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
		}
	}
};
