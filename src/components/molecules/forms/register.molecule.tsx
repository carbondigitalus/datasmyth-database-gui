/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';

export default class RegisterForm extends React.Component {
  private async userRegister(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    console.log('Begin capture register data.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/register/`,
      data: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm
      }
    })
      .then((res) => {
        console.log('register success\n', res.statusText);
        window.setTimeout(() => {
          location.assign('/login');
        }, 3000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitRegister() {
    const firstName: string = $('#firstName').val().toString();
    const lastName: string = $('#lastName').val().toString();
    const email: string = $('#email').val().toString();
    const password: string = $('#password').val().toString();
    const passwordConfirm: string = $('#passwordConfirm').val().toString();
    return await this.userRegister(firstName, lastName, email, password, passwordConfirm);
  }

  render() {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <form id='register-form'>
          <TextField id='firstName' className='form_input' fullWidth label='First Name' />
          <TextField id='lastName' className='form_input' fullWidth label='Last Name' />
          <TextField id='email' className='form_input' fullWidth label='Email' />
          <TextField id='password' className='form_input' fullWidth label='Password' />
          <TextField id='passwordConfirm' className='form_input' fullWidth label='Password Confirmation' />
          <Button
            id='submit'
            className='form_btn vdb-button-dark'
            fullWidth
            variant='contained'
            onClick={() => {
              this.submitRegister();
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    );
  }
}
