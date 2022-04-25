// React
import React, { useState } from "react";
// images
import registerIcon from "../../../../images/Header/registerIcon.svg";
import loginIcon from "../../../../images/Header/LoginIcon.svg";
// MUI
import { Grid, Typography, Box } from "@mui/material";
import LanguageSelect from "./LanguageSelect";
import Login from "../../../../pages/Login";

export default function UserLogin() {

  const [modalOpen, toggleModal] = useState(false);

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
          height: "min-content",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={registerIcon} width="15vw" />
        <Typography
          sx={(theme) => ({
            ml: "5px",
            color: "#fff",
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "1em",
            [theme.breakpoints.down("lg")]: {
              fontSize: "0.5em !important",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "0.4em !important",
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
          cursor: "pointer",
        }}
        onClick={() => {
          toggleModal(true);
        }}
      >
        <img src={loginIcon} width="15vw" />
        <Typography
          sx={(theme) => ({
            borderRight: "2px solid #FFFFFF",
            ml: "5px",
            fontFamily: "Arimo",
            fontWeight: "400",
            fontSize: "1em",
            pr: "20px",
            [theme.breakpoints.down("lg")]: {
              fontSize: "0.5em !important",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "0.4em !important",
            },
          })}
        >
          Войти
        </Typography>
      </Box>
      <LanguageSelect />
      <Login toggleModal={modalOpen} closeModal={() => { toggleModal(false) }} />
    </Grid>
  );
}