// React
import React from "react";
// images
import headerBackground from "../../../images/Header/headerBackground.svg";
// MUI
import { Grid } from "@mui/material";
// components
import HeaderIconPart from "./components/HeaderIconPart";
import FootballerPart from "./components/FootballerPart";

export default function HeaderContent() {
  return (
    <Grid
      item
      container
      sx={{
        backgroundImage: `url(${headerBackground})`,
        position: "relative",
        backgroundColor: "rgb(16, 16, 39)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
      }}
    >
      <HeaderIconPart />
      <FootballerPart />
    </Grid>
  );
}
