import React from "react";

const WeatherDisplay = ({ weather }) => {
  // Determine color based on temperature
  const temperatureColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
