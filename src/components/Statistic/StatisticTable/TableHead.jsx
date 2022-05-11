// React
import React from "react";
// Components
import { TableRow, TableHead, TableCell } from "@mui/material";

export default function TableHeadComponent() {
  return (
    <TableHead
      sx={{
        bgcolor: "#565666"
      }}
    >
      <TableRow
        sx={{
          "& th": {
            color: "#0000007A",
            bgcolor: "#565666",
            borderBottom: "none",
            pl: { xs: "0", md: "15px" },
            pr: { xs: "0", md: "15px" }
          }
        }}
      >
        <TableCell
          colSpan={3}
          align="right"
          sx={{
            pr: { xs: "20px !important", sm: "4.8% !important", md: "5% !important", lg: "6% !important" }
          }}
        >
          прогноз
        </TableCell>
        <TableCell align="center">дата</TableCell>
        <TableCell align="center">время</TableCell>
        <TableCell align="left" colSpan={2}>Счёт</TableCell>
      </TableRow>
    </TableHead>
  );
}
