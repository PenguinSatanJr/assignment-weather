import { Grid, Typography } from '@mui/material';
import LineChart from 'components/line-chart';
import Table from 'components/table';
import { GetWeatherParams } from 'hooks/queries/weather-api';
import useCurrentWeatherQuery from 'hooks/queries/weather-queries';
import { FormattedMessage } from 'react-intl';

const Main = () => {
  const params: GetWeatherParams = {
    lat: 40.1872,
    lon: 44.5152,
    appid: '39612356bfcb87e2061a89eb187b5f9c',
    units: 'metric',
  };

  const weatherQuery = useCurrentWeatherQuery(params);

  console.log(weatherQuery);

  return (
    <>
      <Typography variant="h2" align="center">
        <FormattedMessage
          id="main.title"
          defaultMessage="Weather forecast in Yerevan"
        />
      </Typography>
      <Grid container justifyContent="center" spacing={5} paddingX={5}>
        <Grid container justifyContent="center">
          <Grid item>
            <LineChart />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ paddingBottom: 2 }}>
            Morning
          </Typography>
          <Table />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
