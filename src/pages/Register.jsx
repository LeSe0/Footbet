// React
import React, { useState } from 'react'
// components
import { Box, Hidden } from '@mui/material'
import Menu from '../components/Menu/Menu'
import ContentTitle from '../helpers/ContentTitle'
import ChooseAvatar from '../components/Register/ChooseAvatar'
import RegisterInputs from '../components/Register/RegisterInputs'
import Joi from 'joi'
import RegisterButton from '../components/Register/RegisterButton'

export default function Register() {
  const [login, setLogin] = useState()
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  const [date, setDate] = useState()
  const [number, setNumber] = useState()

  const [validateInputs, validation] = useState({
    value: {
      email: "",
      password: "",
      date: "",
      telephone: "",
      login: ""
    }
  });

  const scheme = Joi.object().keys({
    login: Joi.string().min(8).max(25).required(),
    password: Joi.string().min(8).max(20).required(),
    date: Joi.date().required(),
    telephone: Joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      validation(
        scheme.validate({
          login: login,
          password: password,
          date: date,
          telephone: number,
          email: mail
        }, { abortEarly: false })
      );
      console.log(validateInputs);
    }}>
      <Menu />
      <Hidden smDown>
        <ContentTitle title="Регистрация" />
      </Hidden>
      <ChooseAvatar />
      <RegisterInputs
        login={login} setLogin={setLogin}
        mail={mail} setMail={setMail}
        password={password} setPassword={setPassword}
        date={date} setDate={setDate}
        number={number} setNumber={setNumber}
        validateInputs={validateInputs} />
      <RegisterButton title="Зарегистрироваться" validateInputs={validateInputs} />
    </form>
  )
}