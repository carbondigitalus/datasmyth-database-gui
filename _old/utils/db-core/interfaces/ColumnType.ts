import { CockroachDB } from '../enums/databases/CockroachDB';
import { Cordova } from '../enums/databases/Cordova';
import { Expo } from '../enums/databases/Expo';
import { MariaDB } from '../enums/databases/MariaDB';
import { MicrosoftSQLServer } from '../enums/databases/MicrosoftSQLServer';
import { MySQL } from '../enums/databases/MySQL';
import { Oracle } from '../enums/databases/Oracle';
import { PostgreSQL } from '../enums/databases/PostgreSQL';
import { ReactNative } from '../enums/databases/ReactNative';
import { Spanner } from '../enums/databases/Spanner';
import { SQLite } from '../enums/databases/SQLite';

export interface ColumnType {
  type:
    | CockroachDB
    | Cordova
    | Expo
    | MariaDB
    | MicrosoftSQLServer
    | MySQL
    | Oracle
    | PostgreSQL
    | ReactNative
    | Spanner
    | SQLite;
}
