export interface ColumnReference {
  refType: ReferenceType;
  refField: string;
}

enum ReferenceType {
  '<',
  '>',
  '<>',
  '-'
}
