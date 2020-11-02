import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather city="Paris" />
      <p>
        Open-source code by{" "}
        <a href="https://github.com/everi1aj/weather-react.git">
          Allison Everitt
        </a>
      </p>
    </div>
  );
}
