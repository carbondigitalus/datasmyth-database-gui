// Core Modules
import * as fs from 'fs';

// NPM Modules
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Custom Modules
import PortalTemplate from 'components/templates/portal.template';
import DatabaseContext from 'utils/context/database.context';

interface PageProps {
  data: any;
}

export function getStaticProps(context) {
  const file = `${process.cwd()}/src/database/database.json`;
  const database = fs.readFileSync(file, 'utf-8');
  console.log('database\n', database);

  return {
    props: { data: database }
  };
}

export default class IndexPage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <PortalTemplate pageTitle='Dashboard' data={this.props.data}>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi
            tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id
            interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
            suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus
            vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt.
            Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur
            lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>{this.props.data}</Typography>
        </Box>
      </PortalTemplate>
    );
  }
}
