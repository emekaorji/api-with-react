import React from "react";
import { Layout } from "../components/Layout";

export default function NotfoundPage() {

	const protect = {
		h1: {
			fontSize: '3em',
		},
		h2: {
			fontSize: '.8em',
		},
	};

	return (
		<Layout>
			<div>
				<h1 style={protect.h1}>Private page</h1>
				<h2 style={protect.h2}>Only users can see access this page</h2>
			</div>
		</Layout>
	);
}
