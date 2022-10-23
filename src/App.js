// import logo from './logo.svg';
import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

import Announcement from "./components/Announcement";
import "./App.css";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  );
}

export default App;
