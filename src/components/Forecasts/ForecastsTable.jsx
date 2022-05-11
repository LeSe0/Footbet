// React
import React from "react";
// Components
import { Grid, Hidden } from "@mui/material";
import TableForDesktop from "./TableForDesktop";
import TableForMobile from "./TableForMobile";

export default function ForecastsTable() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{
      "& a": {
        textDecoration: "none"
      }
    }}>
      <Hidden smDown>
        <TableForDesktop />
      </Hidden>
      <Hidden smUp>
        <TableForMobile />
      </Hidden>
    </Grid>
  );
}
