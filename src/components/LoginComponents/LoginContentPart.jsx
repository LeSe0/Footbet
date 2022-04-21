// React
import React from "react";
import { Stack, Typography } from "@mui/material";
// components
import LoginInputComponent from "./LoginInputComponent";

export default function LoginContentPart({
  validateInputs,
  login,
  changeLogin,
  password,
  changePassword,
}) {
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <LoginInputComponent
        placeholder="Адрес почты"
        changeLogin={changeLogin}
        login={login}
        validateInputs = {validateInputs}
        type = "email"
      />
      <LoginInputComponent
        placeholder="Пароль"
        validateInputs={validateInputs}
        changePassword={changePassword}
        password={password}
        type = "password"
      />
      <Typography
        textAlign="left"
        sx={{
          width: "80%",
          mt: "1%",
          fontSize: "0.8rem",
        }}
      >
        Забыли Пароль?
      </Typography>
    </Stack>
  );
}