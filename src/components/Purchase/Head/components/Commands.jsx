// React
import React from "react";
import AtleticoMadrid from "../../../../images/Main/Games/gamesItems/AtleticoMadrid.svg";
import Renn from "../../../../images/Main/Games/gamesItems/Renn.svg";
import { Grid, Stack, Typography } from "@mui/material";

export default function Commands() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={theme => ({
        "& img": {
          width: "70px",
          height: "80px"
        },
        [theme.breakpoints.between("md", "lg")]: {
          "& img": {
            width: "50px",
            height: "60px"
          }
        },
        [theme.breakpoints.down("md")]: {
          "& img": {
            width: "40px",
            height: "50px"
          }
        },
        '& p , span' : {
            fontWeight : "700"
        },
        "& p" : {
            fontSize : {xs : "13px" , sm : "15px" , md : "17px" , lg : "19px"}
        }
      })}
    >
      <Grid item>
        <Stack alignItems="center">
          <img src={AtleticoMadrid} />
          <Typography>Атлетико Мадрид</Typography>
        </Stack>
      </Grid>
      <Grid item mx = "20px">
        <Grid container alignItems = "center" height = "100%">
          <Typography component = "span" >VS.</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Stack alignItems="center">
          <img src={Renn} />
          <Typography>Ренн</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
