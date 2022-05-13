// React
import React from "react";
import CardExample from "../../../images/Purchase/CardExample.svg";
// Components
import { Grid } from "@mui/material";
import Inputs from "./Inputs/Inputs";

export default function Purchase() {
  return (
    <Grid
      container
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", md: "space-around" }}
      alignItems="center"
      my = "40px"
    >
      <Grid
        item
        sx={{
          "& img": {
            width: { xs: "300px", sm: "350px", md: "400px", lg: "600px" }
          }
        }}
      >
        <img src={CardExample} />
      </Grid>
      <Grid item border = "1px solid #EEECEC" p = "20px">
        <Inputs />
      </Grid>
    </Grid>
  );
}
