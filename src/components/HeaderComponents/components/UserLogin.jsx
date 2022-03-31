// React
import React from "react";
// images
import registerIcon from "../../../images/Header/registerIcon.svg";
import loginIcon from "../../../images/Header/LoginIcon.svg";
// MUI
import { Grid, Typography, Box } from "@mui/material";
import LanguageSelect from "./userLoginComponents/LanguageSelect";

export default function UserLogin() {
  return (
    <Grid
      item
      sx={(theme) => ({
        display: "flex",
        mt: "3.7994143484626646vw",
        justifyContent: "flex-end",
        fontSize: "18px",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      })}
    >
      <Box
        sx={{
          height: "min-content",
          display : "flex",
          alignItems : "center",
        }}
      >
        <img src={registerIcon} />
        <Typography
          sx={(theme) => ({
            ml: "5px",
            color: "#fff",
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "1em",
            [theme.breakpoints.down("lg")]: {
              fontSize: "0.8em",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.5em",
            },
          })}
        >
          Регистрация
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: "20px",
          height: "min-content",
          color: "#fff",
        }}
      >
        <img src={loginIcon} />
        <Typography
          sx={(theme) => ({
            borderRight: "2px solid #FFFFFF",
            ml: "5px",
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "1em",
            pr: "20px",
            [theme.breakpoints.down("lg")]: {
              fontSize: "0.8em",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.5em",
            },
          })}
        >
          Войти
        </Typography>
      </Box>
      <LanguageSelect />
    </Grid>
  );
}
