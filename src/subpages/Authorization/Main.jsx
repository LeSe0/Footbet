// React
import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import Joi from "joi";
// components
import LoginButtonComponent from "../../components/LoginComponents/LoginButtonComponent";
import LoginContentPart from "../../components/LoginComponents/LoginContentPart";
import LoginHeadPart from "../../components/LoginComponents/LoginHeadPart";
import LoginTitleComponent from "../../components/LoginComponents/LoginTitleComponent";

export default function Main({ maxMobile, changeActivePage }) {
  const [validateInputs, validation] = useState();
  const [login, changeLogin] = useState("");
  const [password, changePassword] = useState("");

  const scheme = Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(20).required(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validation(
          scheme.validate({
            email: login,
            password: password,
          })
        );
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: maxMobile ? "flex-start" : "center",
          height: "100%",
        }}
      >
        <LoginHeadPart />
        <LoginTitleComponent title={"Авторизация"} />
        <LoginContentPart
          validateInputs={validateInputs}
          login={login}
          password={password}
          changeLogin={changeLogin}
          changePassword={changePassword}
        />
        <LoginButtonComponent title={"Войти"} validateInputs={validateInputs} />
        <Typography
          component="span"
          sx={{
            pt: "15px",
            fontSize: { xs: "13px", sm: "14px", lg: "15px" },
            fontFamily: "Segoe UI",
            display: "inline",
          }}
        >
          или
          <Typography
            component="span"
            sx={{
              fontFamily: "Arimo",
              color: "#9E094A",
            }}
          >
            Зарегистрироваться
          </Typography>
        </Typography>
      </Stack>
    </form>
  );
}