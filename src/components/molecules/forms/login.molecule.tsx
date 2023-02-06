/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';

export default class LoginForm extends React.Component {
  private async userLogin(email: string, password: string) {
    console.log('Begin capture email and password.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/login/`,
      data: {
        email,
        password
      },
      withCredentials: true
    })
      .then((res) => {
        // capture token
        const token = res.data.data;
        // set jwt in local storage
        localStorage.setItem('veterandb-token', token);
        // redirect
        setTimeout(() => {
          window.location.assign('/');
        }, 1000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitLogin() {
    $('#submit').text('Processing...');
    const email: string = $('#email').val().toString();
    const password: string = $('#password').val().toString();
    return await this.userLogin(email, password);
  }

  render() {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <form id='login-form'>
          <TextField id='email' className='form_input' fullWidth label='Email' />
          <TextField id='password' className='form_input' fullWidth label='Password' />
          <Button
            id='submit'
            className='form_btn vdb-button-dark'
            fullWidth
            variant='contained'
            onClick={() => {
              this.submitLogin();
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    );
  }
}
