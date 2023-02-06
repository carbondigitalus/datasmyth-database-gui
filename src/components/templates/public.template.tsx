// NPM Modules
import * as React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

interface PageProps {
  children: any;
}

export default class PublicTemplate extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render() {
    return (
      <Box sx={{ display: 'flex', bgcolor: '#36421b' }}>
        <CssBaseline />
        <Container maxWidth='sm'>{this.props.children}</Container>
      </Box>
    );
  }
}
