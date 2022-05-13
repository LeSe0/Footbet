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
        <TableCell colSpan = "2" sx = {{
          fontSize : {xs : "1rem" , sm : "1.2rem" , md : '1.5rem'}
        }}>История игр</TableCell>
        <TableCell align="center" sx = {{pb : "0"}} >прогноз</TableCell>
        <TableCell align="center" sx = {{pb : "0"}}>дата</TableCell>
        <TableCell align="center" sx = {{pb : "0"}}>время</TableCell>
        <TableCell align="left" colSpan="2" sx = {{pb : "0"}}>Счёт</TableCell>
      </TableRow>
    </TableHead>
  );
}
