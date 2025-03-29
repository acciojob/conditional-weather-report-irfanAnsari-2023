import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./../styles/App.css";

const App = () => {
  // Initialize state for weather data
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  // useEffect to update weather data on mount
  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
