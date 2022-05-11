// React
import React from "react";
// Components
import { Grid, Hidden } from "@mui/material";
import TableForDesktop from "./TableForDesktop";

export default function ForecastsTable() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Hidden smDown>
        <TableForDesktop />
      </Hidden>
    </Grid>
  );
}
