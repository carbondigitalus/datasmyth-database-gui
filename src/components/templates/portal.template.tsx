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
import { Project } from './../../utils/smythdb-core/Project';
import { TableOptions } from 'utils/smythdb-core/TableOptions';
export interface PageProps {
  children: any;
  data: Project[];
  pageTitle: string;
}

export interface PageState {
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
}

export default class PortalTemplate extends React.Component<PageProps, PageState> {
  private drawerWidth = 350;

  constructor(props: PageProps) {
    super(props);
    this.state = { anchorEl: null, isMenuOpen: false };
  }

  private closeAccountMenu() {
    return this.setState({ anchorEl: null, isMenuOpen: false });
  }

  private handleAccountMenuClick() {
    if (this.state.isMenuOpen) {
      return this.closeAccountMenu();
    } else {
      return this.openAccountMenu();
    }
  }

  private openAccountMenu() {
    const element: HTMLElement = document.querySelector('#avatar-icon');
    return this.setState({ anchorEl: element, isMenuOpen: true });
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' sx={{ width: `calc(100% - ${this.drawerWidth}px)`, ml: `${this.drawerWidth}px` }}>
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
                Organization
              </Link>
              <Link
                underline='hover'
                sx={{ display: 'flex', alignItems: 'center' }}
                color='inherit'
                href='/material-ui/getting-started/installation/'
              >
                <DatasetIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                Database
              </Link>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <TableViewIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                Table
              </Typography>
            </Breadcrumbs>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='DataSmyth Details'>
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
                    <Avatar src='assets/img/icon.png' />
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
              <MenuItem component={Link} href='https://datasmyth.com' target='_blank'>
                DataSmyth Website
              </MenuItem>
              <Divider />
              <MenuItem component={Link} href='https://datasmyth.com' target='_blank'>
                Docs
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
          <List>
            <ListItem disablePadding>
              {this.props.data.map((item: Project) => {
                return (
                  <TreeView
                    aria-label='customized'
                    defaultExpanded={['1']}
                    defaultCollapseIcon={<IndeterminateCheckBoxIcon />}
                    defaultExpandIcon={<AddBoxIcon />}
                    defaultEndIcon={<DisabledByDefaultIcon />}
                    sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto', py: 4, px: 1.5 }}
                  >
                    <TreeItem nodeId='1' label={item.projectName}>
                      {item.tableList.map((table) => {
                        return <TreeItem nodeId='2' label={table[0]} />;
                      })}
                    </TreeItem>
                  </TreeView>
                );
              })}
            </ListItem>
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
