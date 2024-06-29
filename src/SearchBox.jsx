import { useState } from "react";
import search_icon from "./assets/search.png";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

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

  let getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      // if (!response.ok) {
      //   throw new Error(
      //     "Failed to fetch weather data. Please try again later."
      //   );
      // }

      let jsonResponse = await response.json();
      let info = {
        city: city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].main,
        windSpeed: jsonResponse.wind.speed,
      };
      console.log(info);
      return info;
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={city}
          onChange={handleChange}
        />

        <button>
          <img src={search_icon} alt="" />
        </button>
      </form>
    </div>
  );
}
