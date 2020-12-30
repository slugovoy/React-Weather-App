import React, { useState } from "react";


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const api = {
  key: API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${cityName}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setCurrentWeather(result);
          setCityName("");
          console.log(result);
        });
    }
  };

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const unixTime = currentWeather.dt;
  const currentDate = new Date(unixTime*1000);
  const dateToday = currentDate.toLocaleDateString("en-US", options)


  return (
    <div className={(typeof currentWeather.main != "undefined") ? ((currentWeather.main.temp >= 50 & currentWeather.weather[0].main === "Mist") ? "app mist" 
    : (currentWeather.main.temp > 49 & currentWeather.weather[0].main === "Clear") ? "app warm" 
    : (currentWeather.main.temp >= 50 & currentWeather.weather[0].main === "Rain") ? "app rain" 
    : (currentWeather.main.temp < 50 & currentWeather.weather[0].main === "Clear") ? "app" 
    : (currentWeather.main.temp >= 50 & currentWeather.weather[0].main === "Clouds" || currentWeather.main.temp < 50 & currentWeather.weather[0].main === "Clouds") ? "app clouds" 
    : "app"
    ) : "app"}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            onKeyPress={search}
          />
        </div>
        {typeof currentWeather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{currentWeather.name}, {currentWeather.sys.country}</div>
              <div className="date">{dateToday}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(currentWeather.main.temp)}°F</div>
              <div className="weather">{currentWeather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
