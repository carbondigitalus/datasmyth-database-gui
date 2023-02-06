import { ColumnType } from './ColumnType';
import { MySQLColumnOptions } from './databases/MySQLColumnOptions';
import { PostgreSQLColumnOptions } from './databases/PostgreSQLColumnOptions';

export interface ColumnOptions {
  default?: string;
  enum?: string[];
  enumName?: string;
  name: string;
  nullable?: boolean;
  primary?: boolean;
  type: ColumnType;
  unique?: boolean;
  databaseColumnOptions?: {
    MySQL?: MySQLColumnOptions;
    PostgreSQL?: PostgreSQLColumnOptions;
  };
}
