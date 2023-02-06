/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';

export default class PasswordForgotForm extends React.Component {
  private async userPasswordReset(email: string) {
    console.log('PasswordForgotForm: start');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/password-forgot/`,
      data: {
        email
      }
    })
      .then((res) => {
        console.log('PasswordForgotForm: Success\n', res.statusText);
      })
      .catch((error) => {
        console.log('PasswordForgotForm: Error Received\n', error);
      });
    return res;
  }

  private async submitPasswordForgot() {
    $('#submit').text('Processing...');
    const email: string = $('#email').val().toString();
    await this.userPasswordReset(email);
    $('#submit').text('Please check your email for instructions.');
    return;
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
          <Button
            id='submit'
            className='form_btn vdb-button-dark'
            fullWidth
            variant='contained'
            onClick={() => {
              this.submitPasswordForgot();
            }}
          >
            Reset Password
          </Button>
        </form>
      </Box>
    );
  }
}
