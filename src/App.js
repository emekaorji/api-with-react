import "./App.css";
import React, { Component } from "react";
import LeftPanel from "./components/LeftPanel";
import SmallBg from "./media/small-rope.svg";
import BigBg from "./media/big-rope.svg";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
	// async postData() {
	//   try {

	//   } catch (error) {
	//     console.log(error);
	//   }
	// }

	render() {
		return (
			<div id='app'>
				<img className='background' id='smallBg' src={SmallBg} />
				<img className='background' id='bigBg' src={BigBg} />
				<LeftPanel />
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
			</div>
		);
	}
}

export default App;