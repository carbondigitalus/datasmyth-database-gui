export interface MySQLColumnOptions {
  generatedType: 'virtual' | 'stored';
  length: number;
  unsigned: boolean;
  width: number;
}
