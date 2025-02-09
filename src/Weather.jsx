import { useState } from "react";
import Info from "./Info";
import SearchBox from "./SearchBox";
import "./Weather.css";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="Weather">
      <div className="box">
        <SearchBox updateInfo={updateInfo} />
        <Info info={weatherInfo} />
      </div>
    </div>
  );
}
