import humidityImg from "./assets/humidity.png";
import windImg from "./assets/wind.png";
import "./Info.css";

export default function Info({ info }) {
  return (
    <div className="Info">
      <img src="" alt="" />
      <h1>
        {info.temp}
        <span>&deg;C</span>
      </h1>
      <p>{info.city.toUpperCase()}</p>
      <div className="extraInfo">
        <div>
          <img src={humidityImg} alt="" />
          <p>{info.humidity}&#37;</p> Humidity
        </div>

        <div>
          <img src={windImg} alt="" />
          <p>{info.windSpeed} Km/h </p>Wind Speed
        </div>
      </div>
    </div>
  );
}
