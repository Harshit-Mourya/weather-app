import { useState } from "react";
import search_icon from "./assets/search.png";
import "./SearchBox.css";

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c2e16176807270857b580003f56bc373";
  let [city, setCity] = useState("");
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity(city);
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
