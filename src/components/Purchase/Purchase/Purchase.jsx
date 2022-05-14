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
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "space-around" }}
      alignItems="center"
      my = "40px"
    >
      <Grid
        item
        mb = {{xs : "30px" , lg : "0"}}
        sx={{
          "& img": {
            width: { xs: "300px", sm: "350px", md: "400px" }
          }
        }}
      >
        <img src={CardExample} />
      </Grid>
      <Grid item border = "1px solid #EEECEC" p = "20px" maxWidth = "700px">
        <Inputs />
      </Grid>
    </Grid>
  );
}
