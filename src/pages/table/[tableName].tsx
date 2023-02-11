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

