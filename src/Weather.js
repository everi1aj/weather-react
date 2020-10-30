import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }

  let apiKey = "42e6bc06b4b0dadbd7f47c9b7345f143";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Hello from Weather</h2>
    </div>
  );
}
