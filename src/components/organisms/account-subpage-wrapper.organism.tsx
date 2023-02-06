import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface OrganismProps {
  children: any;
  subPageTitle: string;
}

export default class AccountUpdateWrapper extends React.Component<OrganismProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box component='main' sx={{ flexGrow: 1, bgcolor: 'transparent', p: 3 }}>
        <Typography variant='h2' className='headline-secondary'>
          {this.props.subPageTitle}
        </Typography>
        {this.props.children}
      </Box>
    );
  }
}
