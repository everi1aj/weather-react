import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        Open-source code by{" "}
        <a href="https://github.com/everi1aj/weather-react.git">
          Allison Everitt
        </a>
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
