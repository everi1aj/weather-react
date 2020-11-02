import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./illustration2.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <p>
          <a href="https://github.com/everi1aj/weather-react.git">
            Open-source{" "}
          </a>
          coded by: Allison Everitt
        </p>
      </div>
    </div>
  );
}
