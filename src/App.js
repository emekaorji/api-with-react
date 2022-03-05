import './App.css';
import React, { Component } from 'react';
import SmallBg from './media/small-rope.svg';
import BigBg from './media/big-rope.svg';
import AppRouter from './components/AppRouter';
import AuthContextProvider from './contexts/AuthContext';

class App extends Component {
	render() {
		return (
			<div id='app'>
				<img className='background' id='smallBg' src={SmallBg} />
				<img className='background' id='bigBg' src={BigBg} />
				<AuthContextProvider>
					<AppRouter />
				</AuthContextProvider>
			</div>
		);
	}
}

export default App;