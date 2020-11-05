import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <span className="description"> {props.data.description} </span>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.imgUrl}
            alt={props.data.description}
            className="float-left"
          />

          <span div className="temperature">
            {props.data.temperature}
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
                <i className="fas fa-tint"></i>:
                <span> {props.data.humidity}</span>%
              </span>
            </li>
            <li>
              <span className="wind">
                {" "}
                <i className="fas fa-wind"></i>: <span>{props.data.wind}</span>{" "}
                km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
      <span className="date">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </span>
    </div>
  );
}
