// React
import React from "react";
// Components
import TableBodyComponent from "./ForecastsTable/TableBody";
import TableHeadComponent from "./ForecastsTable/TableHead";
import { Table, TableContainer } from "@mui/material";

export default function TableForDesktop() {
  return (
    <TableContainer
      sx={{
        maxHeight: "600px",
        maxWidth: "90%",
        mt: "40px",
        mb: "150px",
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
