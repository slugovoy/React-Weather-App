import React from "react";
const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
function SecondCall({ props }) {
  return (
    <div className="column">
      {props.daily.slice(1, 6).map((day) => {
        return (
          <div className="smallContent" key={day.dt}>
          <p className="dateNow">{new Date(day.dt * 1000).toLocaleDateString("en-US", options)}</p>
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
