import humidityImg from "./assets/humidity.png";
import windImg from "./assets/wind.png";
import "./Info.css";

export default function Info({ info }) {
  let imgSrc = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
  let renderWeatherDescription = () => {
    if (info.icon == "01d") {
      return "Clear sky";
    } else if (info.icon == "02d") {
      return "Few clouds";
    } else if (info.icon == "01n") {
      return "Clear night";
    } else if (info.icon == "02n") {
      return "Few clouds at night";
    } else if (info.icon == "03d") {
      return "Scattered clouds";
    } else if (info.icon == "03n") {
      return "Scattered clouds at night";
    } else if (info.icon == "04d") {
      return "Broken clouds";
    } else if (info.icon == "04n") {
      return "Broken clouds at night";
    } else if (info.icon == "09d") {
      return "Shower rain";
    } else if (info.icon == "09n") {
      return "Shower rain at night";
    } else if (info.icon == "10d") {
      return "Rain";
    } else if (info.icon == "10n") {
      return "Rain at night";
    } else if (info.icon == "11d") {
      return "Thunderstorm";
    } else if (info.icon == "11n") {
      return "Thunderstorm at night";
    } else if (info.icon == "13d") {
      return "Snow";
    } else if (info.icon == "13n") {
      return "Snow at night";
    } else if (info.icon == "50d") {
      return "Mist";
    } else if (info.icon == "50n") {
      return "Mist at night";
    } else {
      return "Weather conditions not available";
    }
  };

  return (
    <div className="Info">
      <img src={imgSrc} alt="weather" className="weatherImg" />
      <p>{renderWeatherDescription()}</p>
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
