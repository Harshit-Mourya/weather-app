import { useState, useEffect } from "react";
import search_icon from "./assets/search.png";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let [city, setCity] = useState("Delhi");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city name.");

        // alert("City not found. Please enter a valid city name.");
      }

      let jsonResponse = await response.json();
      let info = {
        city: city,
        location: jsonResponse.name,
        temp: jsonResponse.main.temp,

        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].main,
        windSpeed: jsonResponse.wind.speed,
        icon: jsonResponse.weather[0].icon,
      };
      console.log(info);
      return info;
    } catch (err) {
      // alert("Enter valid cityname!");
      setError(true);
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity(city);
      let newInfo = await getWeatherInfo();
      console.log(newInfo);
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    async function fetchDefaultCityWeather() {
      try {
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      } catch (err) {
        setError(true);
      }
    }

    fetchDefaultCityWeather();
  }, []);

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={city}
          onChange={handleChange}
        />

        <button>
          <img src={search_icon} alt="search" />
        </button>
      </form>
    </div>
  );
}
