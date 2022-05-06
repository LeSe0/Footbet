// React
import React from "react";
import { useLocation } from "react-router-dom";
// images
import headerBackground from "../../../images/Header/headerBackground.svg";
// components
import { Grid } from "@mui/material";
import HeaderIconPart from "./components/HeaderIconPart";
import FootballerPart from "./components/FootballerPart";

export default function HeaderContent({ toggleModal }) {

  const location = useLocation();

  return (
    <Grid
      item
      container
      sx={{
        backgroundImage: location.pathname == "/register" ? '' : `url(${headerBackground})`,
        position: "relative",
        backgroundColor: location.pathname == "/register" ? "" : "rgb(16, 16, 39)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        flexWrap: "nowrap",
      }}
    >
      <HeaderIconPart />
      <FootballerPart toggleModal={toggleModal} />
    </Grid>
  );
}