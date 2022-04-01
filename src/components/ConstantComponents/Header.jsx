// React
import React from "react";
// MUI
import { Grid, Hidden } from "@mui/material";
// components
import HeaderContent from "../HeaderComponents/headerContentComponents/HeaderContent";
import HeaderWebSites from "../HeaderComponents/headerWebSitesComponents/HeaderWebSites";

export default function Header() {
  return (
    <Grid
      container
      sx={{
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        backgroundColor : "#12112c",
        height : "100%"
      }}
    >
      <Hidden mdDown>
        <Grid item>
          <HeaderWebSites />
        </Grid>
      </Hidden>
      <HeaderContent />
    </Grid>
  );
}