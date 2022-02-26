import React from "react";
import InputField from "./InputField";

const RightPanel = () => (
	<div id='rightPanel'>
		<h1>Login</h1>
		<InputField type='name' value='Darsh Bhavsar' title='Your Name' />
		<InputField type='password' value='******' title='Password' postText='Forgot Password!' />
		<button id='submit'>Let's Go</button>
		<div id='message'>Do you have an Account? <a href="#"><strong>Sign UP</strong></a></div>
	</div>
);

export default RightPanel;
