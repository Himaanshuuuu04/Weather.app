import TemperatureChart from "../Sub-component/TemperatureChart";
import UserContext from "../Context/UserContext";
import Description from "../Sub-component/Description";
import { useContext } from "react";

export default function Today() {
  const { weatherData, error } = useContext(UserContext);

  return (
    <div>
      {!weatherData ? (
        <div className="dots">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="temp-container">
            <div className="temp-box">
              <h1 className="temperature">
                {weatherData
                  ? parseInt(weatherData.current.temperature_2m) + "°C"
                  : "NA"}
              </h1>
              <div>
                <h4 className="minTemparature">
                  {weatherData
                    ? parseInt(weatherData.daily.temperature_2m_min[0]) + "°C"
                    : "NA"}
                </h4>
                <h4 className="maxTemperature">
                  {weatherData
                    ? parseInt(weatherData.daily.temperature_2m_max[0]) + "°C"
                    : "NA"}
                </h4>
              </div>
            </div>
            <Description
              heading={weatherData ? weatherData.current.weather_code : 0}
              description={weatherData ? weatherData.current.weather_code : 0}
            />
          </div>
          <div className="uv-container">
            <div className="temp-box" id="uvindex">
              <h1 className="temperature">
                {weatherData ? weatherData.daily.uv_index_max[0] : "NA"}
              </h1>
              <div>
                <h4 className="minTemparature">UV Index</h4>
              </div>
            </div>
            <TemperatureChart
              temp={
                weatherData
                  ? weatherData.hourly.temperature_2m.slice(0, 24)
                  : "NA"
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
