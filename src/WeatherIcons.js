import React from "react";
import "./WeatherForecast.css";

export default function WeatherIcons(props) {
  let url = `https://openweathermap.org/img/wn/${props.code}@2x.png`;
  return (
    <div className="ForecastIcon">
      <img id="icon" src={url} alt={props.alt} />
    </div>
  );
}
