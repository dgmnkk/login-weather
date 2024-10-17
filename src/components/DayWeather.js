import React from 'react'

const DayWeather = ({ day, temperature, humidity, windSpeed, description, icon }) => {
    return (
      <div  className="max-w-xs bg-white rounded-lg shadow-md p-4 m-4 w-[210px] h-[230px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#9ca3af]">{day}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
          <img src={icon} alt="weather icon" className="w-12 h-12" />
        </div>
        <div className="mt-4">
          <p className="text-4xl font-semibold text-indigo-500">{temperature}°C</p>
          <div className="mt-2 space-y-1">
            <p className="text-gray-600">Humidity: {humidity} %</p>
            <p className="text-gray-600">Wind Speed: {windSpeed} km/h</p>
          </div>
        </div>
      </div>
    );
  };
  

export default DayWeather