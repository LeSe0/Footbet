// React
import React, { useState } from 'react'
import Joi from 'joi';
// components
import { Stack } from '@mui/material'
import LoginButtonComponent from '../../components/LoginComponents/LoginButtonComponent';
import LoginInputComponent from '../../components/LoginComponents/LoginInputComponent';
import LoginTitleComponent from '../../components/LoginComponents/LoginTitleComponent';

export default function CreateNewPassword({ changeActivePage }) {

    const [validateInputs, validation] = useState({
        value: {
            password: ""
        },
        error: {}
    });

    const [password, changePassword] = useState("");

    const scheme = Joi.object().keys({
        password: Joi.string().min(8).max(20).required(),
    });


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            validation(
                scheme.validate({
                    password: password,
                }, { abortEarly: false })
            );

            !scheme.validate({
                password: password,
            }, { abortEarly: false }).error && changeActivePage(4)
        }}>
            <Stack alignItems="center" justifyContent="center" sx={{
                height: "100%",
                "& button": {
                    mt: "15px",
                    mb: "25px"
                }
            }}>
                <LoginTitleComponent title="Новый пароль" />
                <LoginInputComponent
                    placeholder="Пароль"
                    validateInputs={validateInputs}
                    changePassword={changePassword}
                    password={password}
                    type="password" />
                <LoginButtonComponent title="Подтвердить" />
            </Stack>
        </form>
    )
}
