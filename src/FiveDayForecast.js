import React, { useState } from "react";

function SecondCall(){

    const [fiveDayForecast, setFiveDayForecast] = useState({});

    // const lat = currentWeather.coord.lat;
      // const lon = currentWeather.coord.lon;
      // console.log(lat);
      // const secondCall = () => {
      //   fetch(
      //     `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&APPID=${api.key}`
      //   ).then((res) =>
      //     res.json().then((result) => {
      //       setFiveDayForecast(result);
    
      //       console.log(result, "WooHoo!");
      //     })
      //   );
      // };
    return(
        <Container fluid>
        <Row>
          <Col sm={true}>sm=true</Col>
          <Col sm={true}>sm=true</Col>
          <Col sm={true}>sm=true</Col>
          <Col sm={true}>sm=true</Col>
          <Col sm={true}>sm=true</Col>
        </Row>
      </Container>
    )

}

export default SecondCall;