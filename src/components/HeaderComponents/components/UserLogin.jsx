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
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          height: "min-content",
        }}
      >
        <img src={registerIcon} />
        <Typography
          sx={(theme) => ({
            ml: "5px",
            color: "#fff",
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "18px",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
          })}
        >
          Регистрация
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
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
            fontSize: "18px",
            pr: "20px",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
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
