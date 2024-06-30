import humidityImg from "./assets/humidity.png";
import windImg from "./assets/wind.png";
import clearImg from "./assets/clear.png";
import "./Info.css";

export default function Info({ info }) {
  return (
    <div className="Info">
      <img src={clearImg} alt="weather" className="weatherImg" />
      <div className="main">
        <h1>
          {info.temp}&nbsp;
          <span>&deg;C</span>
        </h1>
        <h3>{info.location}</h3>
      </div>
      <div className="extraInfo">
        <div className="infoItem">
          <img src={humidityImg} alt="" />
          <p>{info.humidity}&#37;</p> Humidity
        </div>

        <div className="infoItem">
          <img src={windImg} alt="" />
          <p>{info.windSpeed} Km/h </p>Wind Speed
        </div>
      </div>
    </div>
  );
}
