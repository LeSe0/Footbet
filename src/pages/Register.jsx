// React
import React, { useState } from "react";
import Joi from "joi";
// components
import { Hidden, Box } from "@mui/material";
import Menu from "../components/Menu/Menu";
import ContentTitle from "../helpers/ContentTitle";
import ChooseAvatar from "../components/Register/ChooseAvatar";
import RegisterInputs from "../components/Register/RegisterInputs";
import RegisterButton from "../components/Register/RegisterButton";
import Ball from "../images/Register/Ball.svg";
import BallMobile from "../images/Register/MobileBall.svg";

export default function Register() {
  const [login, setLogin] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [date, setDate] = useState();
  const [number, setNumber] = useState();

  const [validateInputs, validation] = useState({
    value: {
      email: "",
      password: "",
      tel: "",
      login: "",
      date : ""
    }
  });

  const scheme = Joi.object().keys({
    login: Joi.string().min(8).max(25).required(),
    password: Joi.string().min(8).max(20).required(),
    tel: Joi.string()
      .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
      .required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    date : Joi.date().min('1-1-1930').max("1-1-2004").iso()
  });

  const handleSubmit = e => {
    e.preventDefault();
    validation(
      scheme.validate(
        {
          login: login,
          password: password,
          tel: number,
          email: mail,
          date : date
        },
        { abortEarly: false }
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Menu />
      <Hidden smDown>
        <ContentTitle title="Регистрация" />
      </Hidden>
      <ChooseAvatar />
      <RegisterInputs
        login={login}
        setLogin={setLogin}
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        number = {number}
        setNumber={setNumber}
        date = {date}
        setDate = {setDate}
        validateInputs={validateInputs}
      />
      <RegisterButton title="Зарегистрироваться" />
      <Box sx = {{
        position : "absolute",
        right : "0",
        top : {xs : "75%" , sm : "100%"}
      }}>
        <Hidden smDown>
        <img src={Ball} />
        </Hidden>
        <Hidden smUp>
          <img src = {BallMobile} />
        </Hidden>
      </Box>
    </form>
  );
}
