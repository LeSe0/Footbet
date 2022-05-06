// React
import React, { useEffect } from 'react'
// images
import icon from "../../images/Register/Icon.svg"
// components
import { Stack } from '@mui/material'
import Input from './Input'

export default function RegisterInputs({ login, setLogin,
    password, setPassword,
    date, setDate,
    number, setNumber,
    mail, setMail, validateInputs }) {

    return (
        <Stack>
            <Input type="text" icon={icon} setNewValue={setLogin} placeholder="Имя Пользователя" validateInputs={validateInputs} />
            <Input type="email" icon={icon} setNewValue={setMail} placeholder="Адрес почты" validateInputs={validateInputs} />
            <Input type="text" icon={icon} setNewValue={setNumber} placeholder="Номер телефона" validateInputs={validateInputs} />
            <Input type="password" icon={icon} setNewValue={setPassword} placeholder="Имя Пользователя" validateInputs={validateInputs} />
        </Stack>
    )
}
