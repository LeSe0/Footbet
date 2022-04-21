// React
import React, { memo } from "react";

// components
import { Stack, Typography } from "@mui/material";
import LoginInputComponent from "./LoginInputComponent";

const LoginContentPart = memo(({
  validateInputs,
  login,
  changeLogin,
  password,
  changePassword,
}) => {
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
        validateInputs={validateInputs}
        type="email"
      />
      <LoginInputComponent
        placeholder="Пароль"
        validateInputs={validateInputs}
        changePassword={changePassword}
        password={password}
        type="password"
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
})

export default LoginContentPart
