import { DatabaseType, EnumListOptions } from './enums';
import { TableOptions } from './TableOptions';

export interface Project {
  projectName: string;
  databaseType: DatabaseType;
  projectNotes: string;
  enumList: EnumListOptions[];
  tableList: TableOptions[];
}
