import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const api = {
  key: API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function SecondCall(currentWeather){

    
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    
    const lat = currentWeather.props.coord.lat;
   
    const lon = currentWeather.props.coord.lon;

      const secondCall = () => {
        fetch(
          `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&APPID=${api.key}`
        ).then((res) =>
          res.json().then((result) => {
            setFiveDayForecast(result);
    
            console.log(result, "WooHoo!");
          })
        );
      };
    //   secondCall();
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