import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${time}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°F`;
  }
  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcons code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
