import React, { useState, useEffect } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("New Delhi");
  const [city, setCity] = useState("New Delhi");
  const [latitudes, setLatitudes] = useState([]);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      fetch(
        `https://geocode.maps.co/search?q=${location}&api_key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          const extractedData = data.map((location) => ({
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lon),
            display_name: location.display_name,
          }));
          setLatitudes(extractedData);
        })
        .catch((error) => {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
          setError(error.message);
        });
    }
  }, [location]);

  useEffect(() => {
    if (latitudes.length > 0) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitudes[0].latitude}&longitude=${latitudes[0].longitude}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [latitudes]);
  console.log(error);

  return (
    <UserContext.Provider
      value={{
        city,
        setCity,
        input,
        setInput,
        location,
        setLocation,
        latitudes,
        weatherData,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
