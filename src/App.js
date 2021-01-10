import React, { useState } from "react";
import Instructions from "./Popover";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SecondCall from "./FiveDayForecast";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const api = {
  key: API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});

  async function getWeather() {
    let currentWeather = await fetch(
      `${api.base}weather?q=${cityName}&units=imperial&APPID=${api.key}`
    );
    currentWeather = await currentWeather.json();

    console.log(currentWeather);

    let lat = currentWeather.coord.lat;
    let lon = currentWeather.coord.lon;

    let fiveDayForecast = await fetch(
      `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&APPID=${api.key}`
    );
    fiveDayForecast = await fiveDayForecast.json();

    console.log(fiveDayForecast);
    setWeather({ currentWeather, fiveDayForecast });
    setCityName("");
  }

  const { currentWeather, fiveDayForecast } = weather;

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  
  return (
    <div
      className={
        typeof currentWeather != "undefined"
          ? currentWeather.weather[0].main === "Mist"
            ? "app mist"
            : (currentWeather.main.temp > 49) &
              (currentWeather.weather[0].main === "Clear")
            ? "app warm"
            : currentWeather.weather[0].main === "Rain"
            ? "app rain"
            : (currentWeather.main.temp < 50) &
              (currentWeather.weather[0].main === "Clear")
            ? "app"
            : (currentWeather.main.temp >= 50) &
                (currentWeather.weather[0].main === "Clouds") ||
              (currentWeather.main.temp < 50) &
                (currentWeather.weather[0].main === "Clouds")
            ? "app clouds"
            : "app"
          : "app"
      }
    >
      <main>
        <h1>WEATHER APP</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Type city name here..."
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                getWeather();
              }
            }}
          />
        </div>
        <div className="instructions">
          <Instructions />
        </div>
        {typeof currentWeather != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {currentWeather.name}, {currentWeather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(currentWeather.main.temp)}°F
              </div>
              <div className="weather">{currentWeather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      <div className="forecast">
      {typeof currentWeather !== "undefined" ? (
        <SecondCall props={fiveDayForecast} />
      ) : (
        ""
      )}
      </div>
      </main>
    </div>
  );
}

export default App;
