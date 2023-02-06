/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';

export default class PasswordResetForm extends React.Component {
  private getToken() {
    const urlParams: string = window.location.search;
    const token = urlParams.split('?token=')[1];
    return token;
  }

  private async userAccountPasswordReset(token: string, password: string, passwordConfirm: string) {
    console.log('Begin capture register data.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/password-reset/${token}`,
      data: {
        password,
        passwordConfirm
      }
    })
      .then((res) => {
        console.log('register success\n', res.statusText);
        window.setTimeout(() => {
          location.assign('/');
        }, 3000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitPasswordReset() {
    const token = this.getToken();
    const password: string = $('#password').val().toString();
    const passwordConfirm: string = $('#passwordConfirm').val().toString();
    return await this.userAccountPasswordReset(token, password, passwordConfirm);
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
          <TextField id='password' className='form_input' fullWidth label='Password' />
          <TextField id='passwordConfirm' className='form_input' fullWidth label='Password Confirmation' />
          <Button
            id='submit'
            className='form_btn vdb-button-dark'
            fullWidth
            variant='contained'
            onClick={() => {
              this.submitPasswordReset();
            }}
          >
            Change Password
          </Button>
        </form>
      </Box>
    );
  }
}
