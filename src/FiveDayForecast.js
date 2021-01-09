import React from "react";

function SecondCall({ props }) {
  return (
    <div className="column">
      {props.daily.slice(1, 6).map((day) => {
        return (
          <div className="smallContent">
          <p></p>
            <p>Temperature: {Math.round(day.temp.day)}°F</p>
            <p>Humidity: {day.humidity}%</p>
            <p>Wind Speed: {day.wind_speed}</p>
            <p>Weather Condition: {day.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SecondCall;
