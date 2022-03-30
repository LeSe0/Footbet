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
      sx={theme =>({
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        backgroundColor : "#12112c",
        [theme.breakpoints.down("md")] : {
          display : "flex",
        }
      })}
    >
      <HeaderWebSites />
      <HeaderContent />
    </Grid>
  );
}
