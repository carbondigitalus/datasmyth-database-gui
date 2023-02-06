// NPM Modules
import { Box, Link, Typography } from '@mui/material';
import * as React from 'react';

// Custom Modules
import { RegisterForm } from '../../components/molecules/forms';
import { PublicTemplate } from '../../components/templates';
import logo from './../../../src/assets/img/logo/horizontal-light-bg.png';

export default class RegisterPage extends React.Component {
  render() {
    return (
      <PublicTemplate>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 25, borderRadius: '20px' }}>
          <img className='logo' src={logo} alt='SEM Links Logo' />
          <Typography className='headline-primary' variant='h1'>
            Register
          </Typography>
          <RegisterForm />
          <Typography paragraph className='text-center m-20 text-green-dark'>
            <Link href='/login'>Login</Link> &middot; <Link href='/password-forgot'>Forgot Password</Link>
          </Typography>
        </Box>
      </PublicTemplate>
    );
  }
}
