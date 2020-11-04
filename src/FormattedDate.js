import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = ((props.date.getHours() + 11) % 12) + 1;
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <strong>
        {" "}
        <i>
          Last Updated: {day} {hours}:{minutes}
        </i>
      </strong>
    </div>
  );
}

// possibly getting the wrong time here?//
