// React
import React from "react";
// images
import Key from "../../images/Register/Key.svg";
import Mail from "../../images/Register/Mail.svg";
import Telephone from "../../images/Register/Telephone.svg";
import User from "../../images/Register/User.svg";
// components
import { Stack } from "@mui/material";
import Input from "./Input";
import DatePicker from "./DatePicker";

export default function RegisterInputs({
  setLogin,
  setPassword,
  setDate,
  setNumber,
  setMail,
  validateInputs,
  login,
  number,
  password,
  mail,
  date
}) {
  return (
    <Stack>
      <Input type="text" icon={User} setNewValue={setLogin} value = {login} placeholder="Имя Пользователя" validateInputs={validateInputs} />
      <DatePicker setDate={setDate} value={date} validateInputs={validateInputs}/>
      <Input type="email" icon={Mail} setNewValue={setMail} value = {mail} placeholder="Адрес почты" validateInputs={validateInputs} />
      <Input type="tel" icon={Telephone} setNewValue={setNumber} value = {number} placeholder="Номер телефона" validateInputs={validateInputs} />
      <Input type="password" icon={Key} setNewValue={setPassword} value = {password} placeholder="Пароль" validateInputs={validateInputs} />
    </Stack>
  );
}
