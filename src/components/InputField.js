import React from "react";

const InputField = (props) => (
	<div className='input_field'>
		<div className='input_title'>{props.title}</div>
		<input type={props.type} value={props.value} className="inputs" />
		<div id="forgot"><a href="#">{props.postText}</a></div>
	</div>
);

export default InputField;
