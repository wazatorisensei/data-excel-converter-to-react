import { ITableData } from "../interfaces";
import { tableToCSV } from "./tableToCSV";

let tableData: ITableData[] = [];

export function handleDownloadCSV() {
  const csvContent = tableToCSV(tableData);
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "table.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}