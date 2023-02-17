import { useEffect, useState } from "react";

import {
  handleFileSelection,
  getDataFromCSVFile,
  handleDownloadCSV,
  handleFileSelect,
  TableComponent,
  ITableData,
} from "./shared";

export const ExcelReact = () => {

  const data = [
    {name: 'teste 1', age: 'teste 1'},
  ];

  const [tableData, setTableData] = useState<ITableData[]>([]);

  // const [tableData, setTableData] = useState<string | null>(null);

  useEffect(() => {
    // getDataFromCSVFile();
    // handleDownloadCSV();
    // handleFileSelection();
    // handleFileSelect();
    // setTableData(data);
  }, []);

  return (
    <TableComponent
      data={tableData}
    />
  );
};