// React
import React from "react";
// MUI
import { Typography, Box } from "@mui/material";
// components
import ForecastButtons from "./ForecastButtons";

export default function ForecastItems({ el }) {
  return (
    <Box
      sx={{
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& img": {
              width: "188px",
              height: "204px",
              [theme.breakpoints.between("sm", "lg")]: {
                width: "108px",
                height: "108px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "46px",
                height: "47px",
              },
            },
          })}
        >
          <img src={el.homeIcon} />
          <Typography
            sx={(theme) => ({
              fontFamily: "Arsenal",
              fontWeight: "700",
              fontSize: "43px",
              letterSpacing: "0.05em",
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "25px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
              },
            })}
          >
            {el.homeCommand}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={(theme) => ({
              fontFamily: "Arimo",
              fontSize: "21px",
              letterSpacing: "0.1em",
              color: "rgba(255, 255, 255, 0.48)",
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "17px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "9px",
              },
            })}
          >
            Игра начинается через
          </Typography>
          <Typography
            sx={(theme) => ({
              fontFamily: "Cuprum",
              fontSize: "66px",
              fontWeight: "400",
              letterSpacing: "0.2em",
              color: "#00FF29",
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "35px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "13px",
              },
            })}
          >
            {el.startingTime}
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& img": {
              width: "188px",
              height: "204px",
              [theme.breakpoints.between("sm", "lg")]: {
                width: "108px",
                height: "108px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "46px",
                height: "47px",
              },
            },
          })}
        >
          <img src={el.guestIcon} />
          <Typography
            sx={(theme) => ({
              fontFamily: "Arsenal",
              fontWeight: "700",
              fontSize: "43px",
              letterSpacing: "0.05em",
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "25px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
              },
            })}
          >
            {el.guestCommand}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          height: "min-content !important",
        }}
      >
        <ForecastButtons />
      </Box>
    </Box>
  );
}