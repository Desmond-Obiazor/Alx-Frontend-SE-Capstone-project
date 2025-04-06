import React from 'react';

function WeatherDisplay({ data }) {
  const { name, main, wind, weather } = data;
  const icon = weather[0].icon;

  return (
    <div className="bg-indigo-600 p-6 rounded-md text-center w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-lg">Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} mph</p>
    </div>
  );
}

export default WeatherDisplay;
