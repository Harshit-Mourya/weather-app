import Info from "./Info";
import SearchBox from "./SearchBox";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather In Your City</h1>
      <SearchBox />
      <Info />
    </div>
  );
}
