// React
import React from "react";
// Components
import TableBodyComponent from "./StatisticTable/TableBody";
import TableHeadComponent from "./StatisticTable/TableHead";
import { Table, TableContainer } from "@mui/material";

export default function TableForDesktop() {
  return (
    <TableContainer
      sx={{
        maxHeight: "600px",
        maxWidth: "85%",
        mt: "40px",
        overflowX: "hidden",
      }}
    >
      <Table
        stickyHeader
        sx={{
          bgcolor: "#1B1A30",
        }}
      >
        <TableHeadComponent />
        <TableBodyComponent />
      </Table>
    </TableContainer>
  );
}
