/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';
import AccountContext from 'utils/context/account.context';

export default class AccountUpdateForm extends React.Component {
  static contextType = AccountContext;
  context!: React.ContextType<typeof AccountContext>;

  private async userUpdate(firstName: string, lastName: string, email: string, phone: string) {
    console.log('Begin account update.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/update/`,
      data: {
        firstName,
        lastName,
        email,
        phone
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
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitUpdate() {
    $('#submit').text('Processing...');
    const firstName: string = $('#firstName').val().toString();
    const lastName: string = $('#lastName').val().toString();
    const email: string = $('#email').val().toString();
    const phone: string = $('#phone').val().toString();
    return await this.userUpdate(firstName, lastName, email, phone);
  }

  render() {
    return (
      <AccountContext.Consumer>
        {(context) => (
          <Box
            sx={{
              maxWidth: '100%'
            }}
          >
            <form id='account-update-form'>
              <TextField id='firstName' className='form_input' fullWidth label='First Name' value={context.firstName} />
              <TextField id='lastName' className='form_input' fullWidth label='Last Name' value={context.lastName} />
              <TextField id='email' className='form_input' fullWidth label='Email' value={context.email} />
              <TextField id='phone' className='form_input' fullWidth label='Phone' value={context.phone} />
              <Button
                id='submit'
                className='form_btn vdb-button-dark'
                fullWidth
                variant='contained'
                onClick={() => {
                  this.submitUpdate();
                }}
              >
                Update Account
              </Button>
            </form>
          </Box>
        )}
      </AccountContext.Consumer>
    );
  }
}
