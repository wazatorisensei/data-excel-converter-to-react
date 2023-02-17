import { ITableData } from "../interfaces";

export function tableToCSV(tableData: ITableData[]): string {
  const headers = Object.keys(tableData[0]).join(",");
  const rows = tableData.map((rowData) => {
    return Object.values(rowData).join(",");
  });
  return `${headers}\n${rows.join("\n")}`;
}