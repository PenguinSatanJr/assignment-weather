import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';

const getWeekDays = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date().getDay();
  const weekDays = [];

  for (let i = 0; i < 5; i += 1) {
    weekDays.push(days[Math.abs(today + i)]);
  }
  return weekDays;
};

const LineChart = () => {
  const xLabels = getWeekDays();
  const weatherData = [30, 35, 36, 38, 39, 40, 41];
  return (
    <MuiLineChart
      width={window.screen.width - 100}
      height={300}
      series={[{ data: weatherData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
};

export default LineChart;
