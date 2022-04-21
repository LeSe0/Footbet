// React
import React from "react";
import { ourWebSites } from "../../../routes";
// MUI
import { Grid, Stack, Typography } from "@mui/material";

export default function FooterWebSites() {
  return (
    <Stack
      sx={(theme) => ({
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        [theme.breakpoints.down("1120")]: {
          justifyContent: "flex-end",
        },
      })}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "8px", md: "13px", lg: "15px" },
        }}
      >
        Мы в соц. сетях
      </Typography>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ourWebSites.map((el, i) => {
          return (
            <Grid
              item
              sx={{
                alignItems: "center",
                justifyContent: "center",
                borderLeft: i != 0 && "1px solid #D10A52",
                ml: i != 0 && "10px",
                pl: i != 0 && "10px",
                "& a": {
                  textDecoration: "none",
                  color: "white",
                },
                "& img": {
                  width: { xs: "17px", lg: "28px" },
                  height: { xs: "17px", lg: "28px" },
                },
              }}
              key={"footerWebSites" + i}
            >
              <a href={el.path} target="_blank">
                <img src={el.icon} />
              </a>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}