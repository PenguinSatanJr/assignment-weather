import qs from 'qs';
import get from 'utils/client';

const path = 'https://api.openweathermap.org/data/2.5/weather';

export type GetWeatherParams = {
  lat: number;
  lon: number;
  appid: string;
  units?: string;
};

export const getCurrentWeather = (params: GetWeatherParams) =>
  get<any>(`${path}?${qs.stringify(params)}`);
