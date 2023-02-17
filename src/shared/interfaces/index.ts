
export interface ITableData {
  [key: string]: string | number;
  name: string;
  age: number;
};

export interface ITableProps {
  data: ITableData[];
};