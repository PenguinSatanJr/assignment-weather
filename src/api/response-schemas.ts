import { WeatherData } from 'types';

const weatherDataApiFilter = (weatherData: WeatherData) => ({
  date: weatherData.dt,
  temperature: weatherData.main.temp,
  pressure: weatherData.main.pressure,
  description: weatherData.weather[0].description,
  windSpeed: weatherData.wind.speed,
});

export default weatherDataApiFilter;
