import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import { WeatherData } from 'types';

type LineChartProps = {
  data: WeatherData[];
};

const LineChart = ({ data }: LineChartProps) => {
  const getDates = () =>
    data.map((item) => new Date(item.dt * 1000).toLocaleString('en-US'));

  const getTemperatures = () => data.map((item) => item.main.temp);

  const date = getDates();
  const temperature = getTemperatures();
  return (
    <MuiLineChart
      width={500}
      height={300}
      series={[{ data: temperature }]}
      xAxis={[{ scaleType: 'point', data: date }]}
    />
  );
};

export default LineChart;
