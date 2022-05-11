// React
import React from "react";
import { gamesBetData } from "../../../data/data";
// Components
import { Divider, TableBody, TableRow } from "@mui/material";
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
      {gamesBetData.map((el, i) => {
        return (
          <>
            <TableRow
              key={"gamesBetTableRow" + i}
              sx={{
                bgcolor: "#FFFFFF17",
                "& td": {
                  border: "none"
                }
              }}
            >
              <TableItem el={el} i={i} />
            </TableRow>
            <Divider
              bgcolor="#1B1A30"
              sx={{
                height: "30px"
              }}
            />
          </>
        );
      })}
    </TableBody>
  );
}
