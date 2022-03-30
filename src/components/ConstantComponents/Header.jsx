// React
import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
import HeaderContent from "../HeaderComponents/HeaderContent";

export default function Header() {
  return (
    <Grid
      container
      sx={theme =>({
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        [theme.breakpoints.down("md")] : {
          display : "flex",
        }
      })}
    >
      <Grid
        item
        container
        sx={theme =>({
          width : "min-content",
          color: "#fff",
          [theme.breakpoints.down("md")] : {
            display : "none"
          }
        })}
      >
        FeedBack
      </Grid>
      <HeaderContent />
    </Grid>
  );
}
