import { useState } from "react";
import Info from "./Info";
import SearchBox from "./SearchBox";
import "./Weather.css";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 32.05,
    humidity: 74,
    weather: "Haze",
    windSpeed: 3.09,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="Weather">
      <h1>Weather In Your City</h1>
      <SearchBox updateInfo={updateInfo} />
      <Info info={weatherInfo} />
    </div>
  );
}
