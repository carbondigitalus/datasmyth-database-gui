import React from 'react';
import { Project } from 'utils/smythdb-core/Project';

const DatabaseContext = React.createContext<DatabaseDTO | null>(null);
export default DatabaseContext;

export class DatabaseDTO {
  data: Project[];
}
