// React
import React, { useState } from "react";
import Joi from "joi";
// components
import { Stack, Typography } from "@mui/material";
import LoginButtonComponent from "../../components/LoginComponents/LoginButtonComponent";
import LoginContentPart from "../../components/LoginComponents/LoginContentPart";
import LoginHeadPart from "../../components/LoginComponents/LoginHeadPart";
import LoginTitleComponent from "../../components/LoginComponents/LoginTitleComponent";

export default function Main({ maxMobile, changeActivePage }) {
  const [validateInputs, validation] = useState({
    value: {
      email: "",
      password: ""
    }
  });

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
          }, { abortEarly: false })
        );
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: maxMobile ? "flex-start" : "center",
          height: "100%",
          width: "100%"
        }}
      >
        <LoginHeadPart />
        <LoginTitleComponent title="Авторизация" />
        <LoginContentPart
          validateInputs={validateInputs}
          login={login}
          password={password}
          changeLogin={changeLogin}
          changePassword={changePassword}
          changeActivePage={changeActivePage}
        />
        <LoginButtonComponent title="Войти" validateInputs={validateInputs} />
        <Typography
          component="span"
          sx={{
            pt: "15px",
            fontSize: { xs: "13px", sm: "14px", lg: "15px" },
            fontFamily: "Arimo",
            display: "inline",
          }}
        >
          или
          <Typography
            component="span"
            sx={{
              color: "#9E094A",
              cursor: "pointer",
              ml: "7px"
            }}
          >
            Зарегистрироваться
          </Typography>
        </Typography>
      </Stack>
    </form>
  );
}
