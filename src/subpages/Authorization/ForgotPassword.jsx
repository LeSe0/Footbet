// React
import React, { useState } from 'react'
// components
import { Stack } from '@mui/material'
import LoginInputComponent from "../../components/LoginComponents/LoginInputComponent"
import Joi from 'joi';
import LoginButtonComponent from '../../components/LoginComponents/LoginButtonComponent';
import LoginTitleComponent from '../../components/LoginComponents/LoginTitleComponent';

export default function ForgotPassword({ changeActivePage, maxMobile }) {

    const [validateInputs, validation] = useState({
        value: {
            email: "",
        },
        error: {}
    });

    const scheme = Joi.object().keys({
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
    });

    const [login, changeLogin] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            validation(
                scheme.validate({
                    email: login,
                }, { abortEarly: false })
            );

            !scheme.validate({
                email: login,
            }, { abortEarly: false }).error && changeActivePage(2)
        }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: maxMobile ? "center" : "center",
                height: "100%",
                width: "100%",
                '& button': {
                    mt: "10px",
                    mb: "25px"
                }
            }}>
                <LoginTitleComponent title="Восстановление пароля" />
                <LoginInputComponent
                    placeholder="Адрес почты"
                    changeLogin={changeLogin}
                    login={login}
                    validateInputs={validateInputs}
                    type="email"
                />
                <LoginButtonComponent title="Отправить" validateInputs={validateInputs} />
            </Stack>
        </form>
    )
}
