import React, { Component } from "react";
// import { auth, createNewUser } from "../firebase";
import InputField from "./InputField";

class Signup extends Component {
	// state = { displayName: "", email: "", password: "" };

	// handleChange = (e) => {
	// 	const { name, value } = e.target;

	// 	this.setState({ [name]: value });
	// };

	// handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const { email, password, displayName } = this.state;
	// 	try {
	// 		const { user } = await auth.createUserWithEmailAndPassword(
	// 			email,
	// 			password
	// 		);
	// 		console.log(user);
	// 		await createUserDocument(user, { displayName });
	// 	} catch (error) {
	// 		console.log("error", error);
	// 	}

	// 	this.setState({ displayName: "", email: "", password: "" });
	// };

	render() {
		// const { displayName, email, password } = this.state;
		// return (
		// 	<div>
		// 		<form className='signup-login' onSubmit={this.handleSubmit}>
		// 			<h2>Signup</h2>

		// 			<input
		// 				type='name'
		// 				name='displayName'
		// 				value={displayName}
		// 				onChange={this.handleChange}
		// 				placeholder='Name'
		// 			/>
		// 			<input
		// 				type='email'
		// 				name='email'
		// 				value={email}
		// 				onChange={this.handleChange}
		// 				placeholder='Email'
		// 			/>
		// 			<input
		// 				type='password'
		// 				name='password'
		// 				value={password}
		// 				onChange={this.handleChange}
		// 				placeholder='Password'
		// 			/>
		// 			<button>Signup</button>
		// 		</form>
		// 	</div>
		// );
		return (
			<div id='rightPanel'>
				<h1>Login</h1>
				<InputField type='name' value='Darsh Bhavsar' title='Your Name' />
				<InputField
					type='password'
					value='******'
					title='Password'
					postText='Forgot Password!'
				/>
				<button id='submit'>Let's Go</button>
				<div id='message'>
					Do you have an Account?{" "}
					<a href='#'>
						<strong>Sign UP</strong>
					</a>
				</div>
			</div>
		);
	}
}

export default Signup;
