// NPM Modules
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import $ from 'jquery';

// Custom Modules
import { PortalTemplate } from '../../components/templates';
import AccountContext from 'utils/context/account.context';
import { AccountUpdateWrapper } from 'components/organisms';
import { AccountSecurityUpdateForm, AccountUpdateForm } from 'components/molecules/forms';

export default class AccountPage extends React.Component {
  static contextType = AccountContext;
  context!: React.ContextType<typeof AccountContext>;

  constructor(props) {
    super(props);
    // this.onFirstLoadHideSections();
  }

  componentDidMount(): void {
    this.onFirstLoadHideSections();
  }

  private onFirstLoadHideSections() {
    if (!window.location.href.includes('#')) {
      console.log('false');
      $('#Security-update-subpage').hide();
    }
  }

  private onClickDisplay(event) {
    const subPageToDisplay = event.target.innerText;
    console.log('subpagetodisplay', subPageToDisplay);
    $('#Account-update-subpage').hide();
    $('#Security-update-subpage').removeClass('display-none');
    $('#Security-update-subpage').hide();
    $(`#${subPageToDisplay}-update-subpage`).show();
  }

  render() {
    return (
      <PortalTemplate pageTitle='Account'>
        <AccountContext.Consumer>
          {(context) => (
            <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 5 }}>
              <Toolbar />
              <Grid container>
                <Grid item xs={10} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Paper elevation={3} sx={{ backgroundColor: 'white', p: 5, minHeight: '80vh', display: 'flex' }}>
                    <Grid item xs={2}>
                      <List>
                        <ListItem key={'Avatar'} disablePadding>
                          <Avatar
                            sx={{ width: 80, height: 80, marginRight: 'auto', marginLeft: 'auto', fontSize: '40px' }}
                          >
                            {context?.firstName.substring(0, 1)}
                            {context?.lastName.substring(0, 1)}
                          </Avatar>
                        </ListItem>
                        <ListItem key={'Account'} disablePadding sx={{ marginTop: '25px' }}>
                          <ListItemButton component='a' href='#account-update-subpage' onClick={this.onClickDisplay}>
                            <ListItemIcon>
                              <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Account'} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem key={'Security'} disablePadding>
                          <ListItemButton component='a' href='#security-update-subpage' onClick={this.onClickDisplay}>
                            <ListItemIcon>
                              <SecurityIcon />
                            </ListItemIcon>
                            <ListItemText primary='Security' />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={10}>
                      <List>
                        <ListItem id='Account-update-subpage'>
                          <AccountUpdateWrapper subPageTitle='Personal Information'>
                            <AccountUpdateForm />
                          </AccountUpdateWrapper>
                        </ListItem>
                        <ListItem id='Security-update-subpage' className='display-none'>
                          <AccountUpdateWrapper subPageTitle='Security Information'>
                            <AccountSecurityUpdateForm />
                          </AccountUpdateWrapper>
                        </ListItem>
                      </List>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          )}
        </AccountContext.Consumer>
      </PortalTemplate>
    );
  }
}
