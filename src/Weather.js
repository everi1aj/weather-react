import React from "react";
import "./Weather.css";
import axios from "axios";
import "./App.css";
import "./illustration2.svg";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°F`);
  }
  let apiKey = "42e6bc06b4b0dadbd7f47c9b7345f143";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    city: "New York",
    date: "Tueday 6:00pm",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 20,
    wind: 10,
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter city here..."
              autofocus="on"
              autocomplete="off"
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
      <h1 className="city"> {weatherData.city} </h1>
      <span className="description"> {weatherData.description} </span>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="float-left"
          />

          <span div className="temperature">
            {" "}
            70°
          </span>
          <span div className="units">
            <a href="/" className="active">
              C{" "}
            </a>
            | <a href="/">F </a>
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
                <i className="fas fa-wind"></i> <span>{weatherData.wind}</span>{" "}
                km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
      <span className="date">
        <ul>
          <li> {weatherData.date} </li>
        </ul>
      </span>
    </div>
  );
}
