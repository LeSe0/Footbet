// React
import React from "react";
import { cabinetTableData } from "../../../../data/data";
// Components
import { TableBody } from "@mui/material";
import TableItem from "./TableBody/TableItem";

export default function TableBodyComponent() {
  return (
    <TableBody
      sx={{
        "& div, td, th, tb, p": {
          color: "white !important",
          fontSize: { xs: "10px", md: "12px", lg: "15px" }
        }
      }}
    >
      {cabinetTableData.map((el, i) => {
        return (
          <TableItem el={el} i={i} key={"StatisticItemGames" + i} />
        );
      })}
    </TableBody>
  );
}
