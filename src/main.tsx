import { Grid, Typography } from '@mui/material';
import LineChart from 'components/line-chart';
import Table from 'components/table';
import { FormattedMessage } from 'react-intl';

const Main = () => {
  const someDate = new Date();

  console.log(
    someDate.toLocaleString('en-US', { timeZone: 'America/New_York' }),
  );

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
        <Grid item md={6} sm={6}>
          <Typography variant="h5" sx={{ paddingBottom: 2 }}>
            Morning
          </Typography>
          <Table />
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="h5" sx={{ paddingBottom: 2 }}>
            Afternoon
          </Typography>
          <Table />
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="h5" sx={{ paddingBottom: 2 }}>
            Evening
          </Typography>
          <Table />
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="h5" sx={{ paddingBottom: 2 }}>
            Night
          </Typography>
          <Table />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
