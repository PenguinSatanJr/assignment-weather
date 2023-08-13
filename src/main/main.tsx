import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import LineChart from 'components/line-chart';
import Table from 'components/table';
import { GetWeatherParams } from 'hooks/queries/weather-api';
import useCurrentWeatherQuery from 'hooks/queries/weather-queries';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { WeatherData } from 'types';

const params: GetWeatherParams = {
  lat: 40.1872,
  lon: 44.5152,
  appid: '39612356bfcb87e2061a89eb187b5f9c',
  units: 'metric',
};

const Main = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  const weatherQuery = useCurrentWeatherQuery(params);

  if (!weatherData.length && weatherQuery.data) {
    setWeatherData([weatherQuery.data]);
  }

  const handleFetchData = () => {
    weatherQuery.refetch();
    if (weatherQuery.isError) {
      return console.log('Error');
    }
    if (weatherQuery.data) {
      return weatherQuery.data?.dt === weatherData[weatherData.length - 1].dt
        ? console.log('Sorry there is no new data yet')
        : setWeatherData([...weatherData, weatherQuery.data]);
    }
    return null;
  };

  return (
    <>
      <Typography variant="h2" align="center">
        <FormattedMessage id="main.title" defaultMessage="Weather in Yerevan" />
      </Typography>
      <Grid container justifyContent="center" spacing={5} paddingX={5}>
        {weatherData.length && (
          <Grid item>
            <LineChart data={weatherData} />
          </Grid>
        )}

        <Grid item xs={12}>
          <Table data={weatherData} />
        </Grid>
        <Grid item>
          <LoadingButton
            variant="contained"
            onClick={handleFetchData}
            disabled={!weatherData.length}
            loading={weatherQuery.isLoading}
          >
            <FormattedMessage
              id="main.fetchButtonTitle"
              defaultMessage="Fetch more data"
            />
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
