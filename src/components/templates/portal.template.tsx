// NPM Modules
import BusinessIcon from '@mui/icons-material/Business';
import DatasetIcon from '@mui/icons-material/Dataset';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TableViewIcon from '@mui/icons-material/TableView';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
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
  Menu,
  MenuItem,
  SvgIcon,
  SvgIconProps,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import customTheme from 'config/mui.theme';
import Head from 'next/head';
import * as React from 'react';

// Custom Modules
export interface PageProps {
  children: any;
  pageTitle: string;
}

export interface PageState {
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
}

export default class PortalTemplate extends React.Component<PageProps, PageState> {
  private drawerWidth = 300;

  constructor(props: PageProps) {
    super(props);
    this.state = { anchorEl: null, isMenuOpen: false };
  }

  componentDidMount(): void {
    this.onLoadDataRetrieve();
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

  private async onLoadDataRetrieve() {
    // placeholder
  }

  private openAccountMenu() {
    const element: HTMLElement = document.querySelector('#avatar-icon');
    return this.setState({ anchorEl: element, isMenuOpen: true });
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <Head>
          <title>{`${this.props.pageTitle} | DataSmyth`}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <ThemeProvider theme={customTheme}>
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
            <TreeView
              aria-label='customized'
              defaultExpanded={['1']}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
              sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto', py: 4, px: 1.5 }}
            >
              <TreeItem nodeId='1' label='Main'>
                <TreeItem nodeId='2' label='Hello' />
                <TreeItem nodeId='3' label='Subtree with children'>
                  <TreeItem nodeId='6' label='Hello' />
                  <TreeItem nodeId='7' label='Sub-subtree with children'>
                    <TreeItem nodeId='9' label='Child 1' />
                    <TreeItem nodeId='10' label='Child 2' />
                    <TreeItem nodeId='11' label='Child 3' />
                  </TreeItem>
                  <TreeItem nodeId='8' label='Hello' />
                </TreeItem>
                <TreeItem nodeId='4' label='World' />
                <TreeItem nodeId='5' label='Something something' />
              </TreeItem>
            </TreeView>
          </Drawer>
          <Grid container>
            <Grid item xs={10} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
              {this.props.children}
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    );
  }
}

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z' />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z' />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon className='close' fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z' />
    </SvgIcon>
  );
}
