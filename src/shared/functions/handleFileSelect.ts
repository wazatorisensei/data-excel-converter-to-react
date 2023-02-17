import { ChangeEvent, useState } from "react";
import { ITableData } from "../interfaces";
import { getDataFromCSVFile } from "./getDataFromCSVFile";

const [tableData, setTableData] = useState<ITableData[]>([]);

export function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
  const file = event.target.files && event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        const file = new File([result], "table.csv", { type: "text/csv" });
        const data = getDataFromCSVFile(file);
        setTableData(await data);
      }
    };
    reader.readAsText(file);
  }
}

