import React from 'react'
import weatherIcon from '../assets/image.png';

const DayWeather = ({ day, temperature, humidity, windSpeed, description, icon }) => {
    return (
      <div className="max-w-xs bg-white rounded-lg shadow-md p-4 m-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#9ca3af]">Monday</h2>
            <p className="text-gray-500">Sunny</p>
          </div>
          <img src={weatherIcon} alt="weather icon" className="w-12 h-12" />
        </div>
        <div className="mt-4">
          <p className="text-4xl font-semibold text-indigo-500">15°C</p>
          <div className="mt-2 space-y-1">
            <p className="text-gray-600">Humidity: 60%</p>
            <p className="text-gray-600">Wind Speed: 35 km/h</p>
          </div>
        </div>
      </div>
    );
  };
  

export default DayWeather