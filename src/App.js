import "./App.css";
import React, { Component } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import SmallBg from "./media/small-rope.svg";
import BigBg from "./media/big-rope.svg";

const App = () => (
  <div id="app">
    <img className="background" id="smallBg" src={SmallBg} />
    <img className="background" id="bigBg" src={BigBg} />
    <LeftPanel/>
    <RightPanel/>
  </div>
);

export default App;