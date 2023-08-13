export type WeatherData = {
  main: {
    temp: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
  dt: number;
};
