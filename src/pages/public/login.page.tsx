// NPM Modules
import { Box, Link, Typography } from '@mui/material';
import * as React from 'react';

// Custom Modules
import { LoginForm } from '../../components/molecules/forms';
import { PublicTemplate } from '../../components/templates';
import logo from './../../../src/assets/img/logo/horizontal-light-bg.png';

export default class LoginPage extends React.Component {
  render() {
    return (
      <PublicTemplate>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 25, borderRadius: '20px' }}>
          <img className='logo' src={logo} alt='Veteran Database Logo' />
          <Typography className='headline-primary' variant='h1'>
            Login
          </Typography>
          <LoginForm />
          <Typography paragraph className='text-center m-20 text-green-dark'>
            <Link href='/register'>Register</Link> &middot; <Link href='/password-forgot'>Forgot Password</Link>
          </Typography>
        </Box>
      </PublicTemplate>
    );
  }
}
