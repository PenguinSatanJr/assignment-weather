import { useQuery } from 'react-query';
import { GetWeatherParams, getCurrentWeather } from './weather-api';

const useCurrentWeatherQuery = (
  params: GetWeatherParams,
  options?: { enabled: boolean },
) =>
  useQuery(
    ['artists', params.lat, params.lon, params.appid, params.units],
    () => getCurrentWeather(params),
    options,
  );

export default useCurrentWeatherQuery;
