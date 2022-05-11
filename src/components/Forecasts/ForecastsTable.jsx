// React
import React from "react";
// Components
import { Table, TableContainer, Grid } from "@mui/material";
import TableBodyComponent from "./ForecastsTable/TableBody";
import TableHeadComponent from "./ForecastsTable/TableHead";

export default function ForecastsTable() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <TableContainer
        sx={{
          maxHeight: "600px",
          maxWidth: "90%",
          mt: "40px",
          mb: "150px"
        }}
      >
        <Table
          stickyHeader
          sx={{
            bgcolor: "#1B1A30"
          }}
        >
          <TableHeadComponent />
          <TableBodyComponent />
        </Table>
      </TableContainer>
    </Grid>
  );
}
