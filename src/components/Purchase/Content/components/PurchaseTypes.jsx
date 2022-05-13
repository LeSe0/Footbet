// React
import React from "react";
import Paypal from "../../../../images/Purchase/Paypal.svg";
// Components
import { Grid, Typography } from "@mui/material";

export default function PurchaseTypes() {
  return (
    <Grid container alignItems="center" justifyContent="center" mt="30px" flexDirection={{xs: "column" , sm : "row"}}>
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          bgcolor="#A70B47"
          borderRadius="8px"
          height = {{xs : "40px" , md : "50px" , lg : "60px"}}
          width = {{xs : "150px" , md : "200px" , lg : "250px"}}
          cursor="pointer"
        >
          <Typography>Банковская карта</Typography>
        </Grid>
      </Grid>
      <Grid item sx = {{
        mt : {xs : "30px" , sm : "0px"},
        ml : {xs : "0px" , sm : "30px"},
        "& img" : {
          height : {xs : "40px" , md : "50px" , lg : "60px"},
          width : {xs : "150px" , md : "200px" , lg : "250px"}
        },
      }}>
        <img src={Paypal} />
      </Grid>
    </Grid>
  );
}
