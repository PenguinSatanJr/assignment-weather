import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormattedMessage } from 'react-intl';
import weatherDataApiFilter from 'api/response-schemas';
import { WeatherData } from 'types';

type TableProps = {
  data: WeatherData[];
};

const Table = ({ data }: TableProps) => {
  const rows = data.map((item) => weatherDataApiFilter(item));

  return (
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
                {new Date(row.date * 1000).toLocaleString('en-US')}
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
};

export default Table;
