import styled from "styled-components";
import CityComponent from "./Modules/CityComponent";
import WeatherComponent from "./Modules/WeatherInfoComponent";
import { useState } from "react";
import axios from "axios";


const API_KEY = "6281ba387f5b89c54b5b5a280b20ea82";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: Center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px; 
background: white;
font:family: Montserrat; 
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };

  return (
    <Container >
      <AppLabel>React Weather App</AppLabel>
      {weather ? <WeatherComponent weather={weather} /> : <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />}
    </Container>
  );
}

export default App;
