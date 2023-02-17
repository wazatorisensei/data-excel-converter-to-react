import { ITableData } from "../interfaces";

export async function getDataFromCSVFile(file: File): Promise<ITableData[]> {
  const text = await file.text();
  const rows = text.split('\n');
  const header = rows[0].split(',');
  const data = rows.slice(1).map((row) => {
    const values = row.split(',');
    return header.reduce((object, key, index) => {
      object[key.trim()] = values[index].trim();
      return object;
    }, {} as ITableData);
  });
  return data;
}