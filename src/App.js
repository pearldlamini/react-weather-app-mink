import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Durban" />
    <footer>
      This project was coded by Pearl Dlamini and is {" "}
    <a href="https://github.com/pearldlamini/react-weather-app-mink" target="blank_" rel="nooponer noreferrer">Open-sourced on GitHub</a>
    </footer>
    </div>
    </div>
  );
}


