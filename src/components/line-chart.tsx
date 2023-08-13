import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import weatherDataApiFilter from 'api/response-schemas';
import { WeatherData } from 'types';

type LineChartProps = {
  data: WeatherData[];
};

const LineChart = ({ data }: LineChartProps) => {
  const getDates = () =>
    data.map((item) =>
      new Date(weatherDataApiFilter(item).date * 1000).toLocaleString('en-US'),
    );

  const getTemperatures = () => data.map((item) => item.main.temp);

  return (
    <MuiLineChart
      width={500}
      height={300}
      series={[{ data: getTemperatures() }]}
      xAxis={[{ scaleType: 'point', data: getDates() }]}
    />
  );
};

export default LineChart;
