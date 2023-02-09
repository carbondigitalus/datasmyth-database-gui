// NPM Modules
import * as React from 'react';
import DatasetIcon from '@mui/icons-material/Dataset';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Custom Modules
import PortalTemplate from 'components/templates/portal.template';
import database from './../database/database.json';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

interface PageProps {
  data: any;
}

export async function getStaticProps(context) {
  return {
    props: { data: database }
  };
}

export default class IndexPage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <PortalTemplate pageTitle='Dashboard' data={database}>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Toolbar />
          <Paper elevation={3} sx={{ p: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h3'>Project Name: {database.projectName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>Database Type: {database.databaseType}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>Markdown Notes:</Typography>
                <Paper elevation={3} sx={{ p: 5, backgroundColor: 'rgba(0,0,0,0.1)' }}>
                  {database.projectNotes}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          <Toolbar />
          <Paper elevation={3} sx={{ p: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DatasetIcon sx={{ fontSize: '48px' }} />
                <Typography paragraph sx={{ fontSize: '32px' }}>
                  Tables: {database.tableList.length}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </PortalTemplate>
    );
  }
}
