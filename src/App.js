import "./App.css";
import React, { Component } from "react";

export default class FetchUser extends Component {
	state = {
		person: null,
		picture: null,
	};

	async componentDidMount() {
		const url = "https://api.randomuser.me/";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({
			person: data.results[0],
			picture: data.results[0].picture.large,
		});
	}

	render() {
		return (
			<div className='App'>
        {console.log(Boolean(this.state.picture))}
				{!this.state.picture ? (
					<div>Loading...</div>
				) : (
					<div>
						{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}
						<div>
							<img src={this.state.person.picture.large} />
              <div>oiasfdnhsoiundhfuy9hi</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
