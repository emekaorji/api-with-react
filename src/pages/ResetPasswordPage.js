import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { useHistory, useLocation } from "react-router-dom";

export default function ResetPasswordPage() {
	return (
		<Layout>
			<h1>Reset password</h1>
			<div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						// handle reset password
					}}>
					<div>
						<div id='password'>
							<label>New password</label>
							<input type='password' autoComplete='password' required />
						</div>
						<button type='submit'>
							Reset password
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
