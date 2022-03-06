import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext';

export default function Profilepage() {
	const { currentUser } = useAuth();

	const profile = {
		h1: {
			fontSize: '3em',
		},
		h2: {
			width: '40%',
			fontSize: '.8em',
			wordWrap: 'break-word',
			border: '1px solid #fff',
		},
	};
	return (
		<Layout>
			<h1 style={profile.h1}>Profile page</h1>
			{/* <h2 style={profile.h2}>{JSON.stringify(currentUser, null, 2)}</h2> */}
		</Layout>
	);
}