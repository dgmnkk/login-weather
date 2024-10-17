import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DayWeather from '../components/DayWeather';
import { getKyivForecast, getCurrentCityForecast } from '../services/apiservice';

const filterForecastByDays = (list) => {
  const days = [];
  const filteredList = list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    if (!days.includes(date)) {
      days.push(date);
      return true;
    }
    return false;
  });
  return filteredList.slice(0, 5); 
};

const Dashboard = () => {
  const [city, setCity] = useState('Kyiv');
  const [country, setCountry] = useState('UA');
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getKyivForecast()
      .then(({ data }) => {
        setCity(data.city.name);
        setCountry(data.city.country);
        setCurrentWeather({
          temp: Math.floor(data.list[0].main.temp - 273.15),
          description: data.list[0].weather[0].description,
          humidity: data.list[0].main.humidity,
          windSpeed: data.list[0].wind.speed,
        });
        const filteredForecast = filterForecastByDays(data.list);
        setForecast(filteredForecast);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Failed to load weather data.');
        setIsLoading(false);
      });
  }, []);

  const handleLocationClick = () => {
    setIsLoading(true);
    getCurrentCityForecast()
      .then(({ data }) => {
        setCity(data.city.name);
        setCountry(data.city.country);
        setCurrentWeather({
          temp: Math.floor(data.list[0].main.temp - 273.15),
          description: data.list[0].weather[0].description,
          humidity: data.list[0].main.humidity,
          windSpeed: data.list[0].wind.speed,
        });
        const filteredForecast = filterForecastByDays(data.list);
        setForecast(filteredForecast);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Failed to load location-based weather data.');
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Header onLocationClick={handleLocationClick} />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold  m-4">{city}, {country}</h1>
        <div className="text-xl text-gray-700  m-4">
          <p>Temperature: {currentWeather.temp}°C</p>
          <p>Description: {currentWeather.description}</p>
          <p>Humidity: {currentWeather.humidity}%</p>
          <p>Wind Speed: {currentWeather.windSpeed} km/h</p>
        </div>

        <div className="flex flex-wrap justify-between mt-8">
          {forecast.map((day, index) => {
            let dayName = index === 0
              ? "Today"
              : new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

            return (
              <DayWeather
                key={index}
                day={dayName}
                temperature={Math.floor(day.main.temp - 273.15)} 
                humidity={day.main.humidity}
                windSpeed={day.wind.speed}
                description={day.weather[0].description}
                icon={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
