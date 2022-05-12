// React
import React from 'react'
import User from "../../../images/Cabinet/User.svg"
import Calendar from "../../../images/Cabinet/Calendar.svg"
import Key from "../../../images/Cabinet/Key.svg"
import Mail from "../../../images/Cabinet/Mail.svg"
import Telephone from "../../../images/Cabinet/Telephone.svg"
// components
import { Stack } from '@mui/material'
import Profile from './Profile/Profile'
import InformationItems from './Inputs/InformationItems'
import ChangePassword from './Inputs/ChangePassword'

const data = [
    {
        content: "Александр Михаева",
        icon: User
    },
    {
        content: "12.03.1978",
        icon: Calendar
    },
    {
        content: "+495 -254-24-75",
        icon: Telephone
    },
    {
        content: "alex.mikhaeva.19@mail.ru",
        icon: Mail
    },
]

export default function Information() {
    return (
        <Stack alignItems="center">
            <Profile />
            {data.map((el, i) => {
                return <InformationItems key={"CabinetInformationItems" + i} content={el.content} icon={el.icon} />
            })}
            <ChangePassword icon={Key} content="сменить пароль" />
        </Stack>
    )
}
