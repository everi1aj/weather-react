import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
