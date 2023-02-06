import React from 'react';

const DatabaseContext = React.createContext<DatabaseDTO | null>(null);
export default DatabaseContext;

export class DatabaseDTO {
  data: any;
}
