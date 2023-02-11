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

