import React, { useState } from "react";

const api = {
  key: "742c781918de3f3d2d4919255e10565f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">NY City</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
