// NPM Modules
import AddBoxIcon from '@mui/icons-material/AddBox';
import BusinessIcon from '@mui/icons-material/Business';
import DatasetIcon from '@mui/icons-material/Dataset';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TableViewIcon from '@mui/icons-material/TableView';
import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  ImageListItem,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import Head from 'next/head';
import * as React from 'react';
import slugify from 'slugify';

// Custom Modules
import database from './../../database/database.json';
export interface PageProps {
  children: any;
  data: any;
  pageTitle: string;
}

export interface PageState {
  avatarMenuElement: HTMLElement | null;
  isAvatarMenuOpen: boolean;
  isTableListOpen: boolean;
  tableListMenuElement: HTMLElement | null;
}

export default class PortalTemplate extends React.Component<PageProps, PageState> {
  private drawerWidth = 350;

  constructor(props: PageProps) {
    super(props);
    this.state = {
      avatarMenuElement: null,
      isAvatarMenuOpen: false,
      isTableListOpen: true,
      tableListMenuElement: null
    };
  }

  private handleAccountMenuClick() {
    const element: HTMLElement = document.querySelector('#avatar-icon');
    if (this.state.isAvatarMenuOpen) {
      return this.setState({ avatarMenuElement: null, isAvatarMenuOpen: false });
    } else {
      return this.setState({ avatarMenuElement: element, isAvatarMenuOpen: true });
    }
  }

  private handleTableListMenuClick() {
    const element: HTMLElement = document.querySelector('#table-name');
    if (this.state.isTableListOpen) {
      return this.setState({ tableListMenuElement: null, isTableListOpen: false });
    } else {
      return this.setState({ tableListMenuElement: element, isTableListOpen: true });
    }
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <Head>
          <title>{this.props.pageTitle} | DataSmyth</title>
        </Head>
        <CssBaseline />
        <AppBar
          className='portal-topbar'
          position='fixed'
          sx={{ width: `calc(100% - ${this.drawerWidth}px)`, ml: `${this.drawerWidth}px`, backgroundColor: '#000066' }}
        >
          <Toolbar className='box-header' sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' noWrap component='div'>
              {this.props.pageTitle}
            </Typography>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
              sx={{ color: 'white' }}
            >
              <Link underline='hover' sx={{ display: 'flex', alignItems: 'center' }} color='inherit' href='/'>
                <BusinessIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                {database.projectName}
              </Link>
              <Link underline='hover' sx={{ display: 'flex', alignItems: 'center' }} color='inherit' href='/'>
                <DatasetIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                {database.databaseType}
              </Link>
              {/* <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <TableViewIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                Table
              </Typography> */}
            </Breadcrumbs>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='DataSmyth Details'>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <IconButton
                    id='avatar-icon'
                    onClick={() => this.handleAccountMenuClick()}
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={this.state.isAvatarMenuOpen ? 'account-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={this.state.isAvatarMenuOpen ? 'true' : undefined}
                  >
                    <Avatar src='assets/img/icon.png' />
                  </IconButton>
                </Box>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={this.state.avatarMenuElement}
              id='account-menu'
              open={this.state.isAvatarMenuOpen}
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
              <MenuItem component={Link} href='https://datasmyth.com' target='_blank'>
                DataSmyth Website
              </MenuItem>
              <Divider />
              <MenuItem component={Link} href='https://datasmyth.com' target='_blank'>
                Docs
              </MenuItem>
              <MenuItem component={Link} href='https://fortembr.com/support' target='_blank'>
                Support
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
              <img src='assets/img/logo.png' alt='DataSmyth Logo' loading='lazy' />
            </ImageListItem>
          </Toolbar>
          <Divider />
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
          >
            <ListItemButton id='table-name' onClick={() => this.handleTableListMenuClick()}>
              <ListItemIcon>{this.state.isTableListOpen ? <IndeterminateCheckBoxIcon /> : <AddBoxIcon />}</ListItemIcon>
              <ListItemText primary={database.projectName} />
            </ListItemButton>
            <Collapse in={this.state.isTableListOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {database.tableList.map((item) => {
                  return (
                    <ListItemButton key={`${item.id}`} href={`/table/${slugify(item.name)}`} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <DatasetIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </List>
        </Drawer>
        <Grid container>
          <Grid item xs={10} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {this.props.children}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
