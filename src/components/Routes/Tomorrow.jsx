import TemperatureChart from "../Sub-component/TemperatureChart";
import UserContext from "../Context/UserContext";
import Description from "../Sub-component/Description";
import { useContext } from "react";
export default function Tomorrow() {
  const { weatherData, error } = useContext(UserContext);

  return (
    <div>
      <div className="temp-container">
        <div className="temp-box">
          <h1 className="temperature">
            {weatherData
              ? parseInt(
                  (weatherData.daily.temperature_2m_min[1] +
                    weatherData.daily.temperature_2m_max[1]) /
                    2
                ) + "°C"
              : "NA"}
          </h1>
          <div>
            <h4 className="minTemparature">
              {weatherData
                ? parseInt(weatherData.daily.temperature_2m_min[1]) + "°C"
                : "NA"}
            </h4>
            <h4 className="maxTemperature">
              {weatherData
                ? parseInt(weatherData.daily.temperature_2m_max[1]) + "°C"
                : "NA"}
            </h4>
          </div>
        </div>
        <Description
          heading={weatherData ? weatherData.daily.weather_code[1] : 0}
          description={weatherData ? weatherData.daily.weather_code[1] : 0}
        />
        {/* <div className="state-box">
          <h1>Clear Skies</h1>
          <p>
            Today, you can expect clear skies with plenty of sunshine.
            Temperatures will range from a comfortable 24°C in the morning to a
            warm 32°C by afternoon.
          </p>
        </div> */}
      </div>
      <div className="uv-container">
        <div className="temp-box" id="uvindex">
          <h1 className="temperature">
            {weatherData ? weatherData.daily.uv_index_max[1] : "NA"}
          </h1>
          <div>
            <h4 className="minTemparature">UV Index</h4>
          </div>
        </div>
        <TemperatureChart
          temp={
            weatherData ? weatherData.hourly.temperature_2m.slice(24, 48) : "NA"
          }
        />
      </div>
    </div>
  );
}
