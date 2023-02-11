// NPM Modules
import * as React from 'react';
import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@mui/material';
import { withRouter, NextRouter } from 'next/router';

// Custom Modules
import database from '../../database/database.json';
import PortalTemplate from 'components/templates/portal.template';
import { ColumnOptions } from 'utils/smythdb-core/interfaces';

interface PageProps {
  data: any;
  router: NextRouter;
}

export async function getStaticProps(context) {
  return {
    props: { data: database }
  };
}

export async function getStaticPaths() {
  const staticPathValues: any[] = database.tableList.map((item) => {
    return { params: { tableName: item.name } };
  });

  return {
    paths: staticPathValues,
    fallback: true
  };
}

class TableNamePage extends React.Component<PageProps> {
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                  <TableRow sx={{ borderTop: 'solid 1px rgba(0,0,0,0.1)' }}>
                    <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>Name</TableCell>
                    <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>Type</TableCell>
                    <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>Settings</TableCell>
                    <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>References</TableCell>
                    <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>Default</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {database.tableList.map((item) => {
                    // check to make sure the page url & defined table
                    // match the table's name being checked
                    if (item.name === this.props.router.asPath.split('/table/')[1]) {
                      // create array of keys
                      const tableKeys = Object.keys(item);
                      // delete first item (name) from array
                      tableKeys.shift();
                      //
                      return tableKeys.map((fieldName) => {
                        const column: ColumnOptions = item[fieldName];
                        return (
                          <TableRow key={`${item}-${column}`}>
                            <TableCell component='th' scope='row' sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>
                              {fieldName}
                            </TableCell>
                            <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>{column.type}</TableCell>
                            <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>
                              <Stack direction='row'>{this.settingCheck(column)}</Stack>
                            </TableCell>
                            <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>
                              {column?.ref?.refField}
                            </TableCell>
                            <TableCell sx={{ borderRight: 'solid 1px rgba(0,0,0,0.1)' }}>{column.default}</TableCell>
                          </TableRow>
                        );
                      });
                    }
                    return;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
  private settingCheck(column: ColumnOptions) {
    let options: string[] = [];
    if (column.nullable === true) {
      options.push('nullable');
    }
    if (column.primaryKey) {
      options.push('primary-key');
    }
    if (column.unique) {
      options.push('unique');
    }
    return options.map((option) => {
      return <Chip label={option} color='primary' variant='outlined' />;
    });
  }
}

export default withRouter(TableNamePage);
