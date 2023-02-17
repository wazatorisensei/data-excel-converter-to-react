export function handleFileSelection() {return null}

// import { ChangeEvent, useState } from "react";
// import { ITableData } from "../interfaces";

// const [tableData, setTableData] = useState<ITableData[]>([]);

// export function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
//   const file = event.target.files && event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = async (event) => {
//       const result = event.target?.result;
//       if (typeof result === "string") {
//         const data = getDataFromCSVFile(result as File);
//         setTableData(await data);
//       }
//     };
//     reader.readAsText(file);
//   }
// }