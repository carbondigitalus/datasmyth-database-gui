// Custom Modules
import { ColumnReference } from './ColumnReference';
import { ColumnType } from './ColumnType';
import { MySQLColumnOptions } from './databases/MySQLColumnOptions';
import { PostgreSQLColumnOptions } from './databases/PostgreSQLColumnOptions';

export interface ColumnOptions {
  default?: string;
  enum?: string[];
  enumName?: string;
  nullable?: boolean;
  primaryKey?: boolean;
  type: ColumnType;
  unique?: boolean;
  ref?: ColumnReference;
  databaseColumnOptions?: {
    MySQL?: MySQLColumnOptions;
    PostgreSQL?: PostgreSQLColumnOptions;
  };
}
