import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import { Layout } from "../components/Layout";

export default function ForgotPasswordPage() {
	const history = useNavigate();

	return (
		<Layout>
			<h1>Forgot password</h1>
			<div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						// your forgot password logic here
					}}>
					<div>
						<div id='email'>
							<label>Email address</label>
							<input name='email' type='email' autoComplete='email' required />
						</div>
						<button type='submit' colorScheme='primary' size='lg' fontSize='md'>
							Submit
						</button>
					</div>
				</form>
				<Divider>OR</Divider>
				<button onClick={() => history.push("/login")}>Login</button>
			</div>
		</Layout>
	);
}
