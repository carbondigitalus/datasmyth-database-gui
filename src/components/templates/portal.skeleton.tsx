import * as React from 'react';
import { Box, Skeleton } from '@mui/material';

export default class PortalSkeleton extends React.Component {
  render(): React.ReactNode {
    return (
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 25,
          borderRadius: '20px',
          marginLeft: '25%',
          marginRight: '25%',
          width: '50%',
          height: '50%'
        }}
      >
        <Skeleton animation='wave' variant='circular' width={50} height={50} />
        <Skeleton animation='wave' height={50} style={{ marginBottom: 5 }} />
        <Skeleton animation='wave' height={50} style={{ marginBottom: 5 }} />
        <Skeleton animation='wave' height={50} style={{ marginBottom: 5 }} />
        <Skeleton animation='wave' height={50} style={{ marginBottom: 5 }} />
        <Skeleton animation='wave' height={50} style={{ marginBottom: 5 }} />
        <Skeleton sx={{ height: 100 }} animation='wave' variant='rectangular' />
      </Box>
    );
  }
}
