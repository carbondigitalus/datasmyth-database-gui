// NPM Modules
import AddBoxIcon from '@mui/icons-material/AddBox';
import BusinessIcon from '@mui/icons-material/Business';
import DatasetIcon from '@mui/icons-material/Dataset';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TableViewIcon from '@mui/icons-material/TableView';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  ImageListItem,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import * as React from 'react';

// Custom Modules
import logo from './../../../src/assets/img/logo/logo.png';
import icon from './../../../src/assets/img/logo/icon.png';
import AccountContext from 'utils/context/account.context';

export interface PageProps {
  children: any;
  pageTitle: string;
}

export interface PageState {
  anchorEl: HTMLElement | null;
  data: any | null;
  isMenuOpen: boolean;
}

export default class PortalTemplate extends React.Component<PageProps, PageState> {
  private drawerWidth = 240;

  constructor(props: PageProps) {
    super(props);
    this.state = { account: null, anchorEl: null, isLoginActive: false, isMenuOpen: false };
  }

  componentDidMount(): void {
    this.onLoadAccountRetrieve();
  }

  private closeAccountMenu() {
    return this.setState({ anchorEl: null, isMenuOpen: false });
  }

  private async handleAccountLogout() {
    console.log('Begin logout.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: `${process.env.DOMAIN}/v1/account/logout/`
    })
      .then((res) => {
        console.log('Logout success\n', res.statusText);

        //get token from response
        const token = res.data.token;

        //set JWT token to local
        localStorage.setItem('token', token);

        //set token to axios common header
        this.setAuthToken(token);

        // redirect to page
        window.setTimeout(() => {
          location.assign('https://veterandb.com/');
        }, 3000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private handleAccountMenuClick() {
    if (this.state.isMenuOpen) {
      return this.closeAccountMenu();
    } else {
      return this.openAccountMenu();
    }
  }

  private async onLoadAccountRetrieve() {
    const token = this.onLoadTokenCheck();
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_DOMAIN}/v1/account/`,
      data: {
        token
      },
      withCredentials: true
    })
      .then((res) => {
        const newState = { account: res.data.data, isLoginActive: true };
        this.setState(newState);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
        this.redirectIfUserNotFound();
      });
    return res.data;
  }

  private onLoadTokenCheck() {
    const accessToken = localStorage.getItem('veterandb-token');
    if (!accessToken) {
      this.setState({ isLoginActive: false });
      return window.location.assign('/login');
    }
    return accessToken;
  }

  private openAccountMenu() {
    const element: HTMLElement = document.querySelector('#avatar-icon');
    return this.setState({ anchorEl: element, isMenuOpen: true });
  }

  private redirectIfUserNotFound() {
    if (this.state.isLoginActive === false) {
      window.location.assign('/login');
    }
    return;
  }

  private setAuthToken(token: string) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }

  render() {
    if (this.state.isLoginActive === true) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position='fixed' sx={{ width: `calc(100% - ${this.drawerWidth}px)`, ml: `${this.drawerWidth}px` }}>
            <Toolbar className='box-header' sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' noWrap component='div'>
                {this.props.pageTitle}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title='Account Settings'>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <IconButton
                      id='avatar-icon'
                      onClick={() => this.handleAccountMenuClick()}
                      size='small'
                      sx={{ ml: 2 }}
                      aria-controls={this.state.isMenuOpen ? 'account-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={this.state.isMenuOpen ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {this.state.account.firstName.substring(0, 1)}
                        {this.state.account.lastName.substring(0, 1)}
                      </Avatar>
                    </IconButton>
                  </Box>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={this.state.anchorEl}
                id='account-menu'
                open={this.state.isMenuOpen}
                onClose={() => this.handleAccountMenuClick()}
                onClick={() => this.handleAccountMenuClick()}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    backgroundColor: 'white',
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem component={Link} href='/account'>
                  <Avatar /> My Account
                </MenuItem>
                <Divider />
                <MenuItem component={Link} href='https://support.veterandb.com/docs' target='_blank'>
                  <ListItemIcon>
                    <Article fontSize='small' />
                  </ListItemIcon>
                  Docs
                </MenuItem>
                <MenuItem component={Link} href='https://roadmap.veterandb.com/' target='_blank'>
                  <ListItemIcon>
                    <Construction fontSize='small' />
                  </ListItemIcon>
                  Feature Request
                </MenuItem>
                <MenuItem component={Link} href='/account/settings'>
                  <ListItemIcon>
                    <Settings fontSize='small' />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem component={Link} href='https://support.veterandb.com/' target='_blank'>
                  <ListItemIcon>
                    <ContactSupport fontSize='small' />
                  </ListItemIcon>
                  Support
                </MenuItem>
                <MenuItem onClick={() => this.handleAccountLogout()}>
                  <ListItemIcon>
                    <Logout fontSize='small' />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              height: '100vh',
              width: this.drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: this.drawerWidth,
                boxSizing: 'border-box'
              }
            }}
            variant='permanent'
            anchor='left'
          >
            <Toolbar>
              <ImageListItem sx={{ width: '100%', paddingTop: '10px' }}>
                <img src={logo} alt='VeteranDB Logo' loading='lazy' />
              </ImageListItem>
            </Toolbar>
            <Divider />
            <List>
              <ListItem key={'Business'} disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Business'} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Directory'} disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary='Directory' />
                </ListItemButton>
              </ListItem>
              <ListItem key={'NonProfit'} disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemIcon>
                    <VolunteerActivismIcon />
                  </ListItemIcon>
                  <ListItemText primary='NonProfit' />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Podcast'} disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemIcon>
                    <MicIcon />
                  </ListItemIcon>
                  <ListItemText primary='Podcast' />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <AccountContext.Provider value={this.state.account}>{this.props.children}</AccountContext.Provider>
        </Box>
      );
    }
    return <PortalSkeleton />;
  }
}
