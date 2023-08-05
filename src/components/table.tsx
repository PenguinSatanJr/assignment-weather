import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormattedMessage } from 'react-intl';
import data from './data';

type WeatherData = {
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
  dt_txt: string;
};

const createData = (weatherData: WeatherData) => {
  const date = new Date(weatherData.dt_txt);

  return {
    date: date.toLocaleString('en-US'),
    temperature: weatherData.main.temp,
    pressure: weatherData.main.pressure,
    description: weatherData.weather[0].description,
    windSpeed: weatherData.wind.speed,
  };
};

const rows = [
  createData(data.list[0]),
  createData(data.list[1]),
  createData(data.list[2]),
  createData(data.list[3]),
  createData(data.list[4]),
];

const Table = () => (
  <TableContainer component={Paper}>
    <MuiTable size="small">
      <TableHead>
        <TableRow>
          <TableCell>
            <FormattedMessage id="table.time" defaultMessage="Date" />
          </TableCell>
          <TableCell align="right">
            <FormattedMessage
              id="table.temperature"
              defaultMessage="Temperature"
            />
          </TableCell>
          <TableCell align="right">
            <FormattedMessage id="table.pressure" defaultMessage="Pressure" />
          </TableCell>
          <TableCell align="right">
            <FormattedMessage
              id="table.description"
              defaultMessage="Description"
            />
          </TableCell>
          <TableCell align="right">
            <FormattedMessage
              id="table.windSpeed"
              defaultMessage="Wind speed"
            />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.date}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.date}
            </TableCell>
            <TableCell align="right">{row.temperature}</TableCell>
            <TableCell align="right">{row.pressure}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.windSpeed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
