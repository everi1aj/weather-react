import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";
import "./App.css";
import "./illustration2.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter city here..."
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="form-control shadow sm w-100"
              />
            </div>
            <div className="col-3">
              <button>Current Location</button>
            </div>
            <img
              src="./illustration2.svg"
              alt="weather-icon"
              className="icon"
            ></img>
          </div>
        </form>
        <h1 className="city">{weatherData.city}</h1>
        <span className="description"> {weatherData.description} </span>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />

            <span div className="temperature">
              {weatherData.temperature}
            </span>
            <span div className="units">
              <a href="/" className="active">
                F{" "}
              </a>
              | <a href="/">C </a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <span className="humidity">
                  H Icon
                  <i className="fas fa-tint"></i>:
                  <span> {weatherData.humidity}</span>%
                </span>
              </li>
              <li>
                <span className="wind">
                  {" "}
                  W Icon:
                  <i className="fas fa-wind"></i>{" "}
                  <span>{weatherData.wind}</span> km/h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <span className="date">
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
          </ul>
        </span>
      </div>
    );
  } else {
    const apiKey = "42e6bc06b4b0dadbd7f47c9b7345f143";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
