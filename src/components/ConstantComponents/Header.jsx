// React
import React from "react";
// MUI
import { Grid } from "@mui/material";
// components
import HeaderContent from "../HeaderComponents/HeaderContent";
import HeaderWebSites from "../HeaderComponents/HeaderWebSites";

export default function Header() {
  return (
    <Grid
      container
      sx={{
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        backgroundColor : "#12112c",
      }}
    >
      <HeaderWebSites />
      <HeaderContent />
    </Grid>
  );
}
