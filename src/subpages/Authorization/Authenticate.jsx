// React
import React, { useCallback, useState } from 'react'
// components
import { Stack, Typography } from '@mui/material'
import AuthCode from 'react-auth-code-input'
import LoginButtonComponent from '../../components/LoginComponents/LoginButtonComponent'
import LoginTitleComponent from '../../components/LoginComponents/LoginTitleComponent'

export default function Authenticate({ changeActivePage }) {
    const [result, changeResult] = useState()

    const handleChange = useCallback((res) => {
        changeResult(res)
    }, [result])

    const [text, changeText] = useState("")

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (result == "123456") {
                    changeActivePage(3)
                    changeText("")
                }
                else {
                    changeText("Wrong code , please try again!")
                }
            }}>
            <Stack sx={theme => ({
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                '& .authCodeContainer': {
                    width: "80%",
                    display: "flex",
                    justifyContent: 'center',
                    '& :nth-of-type(1)': {
                        ml: 0
                    }
                },
                "& input": {
                    width: "46px",
                    height: "52px",
                    outline: "none",
                    bgcolor: "#FFFFFF1F",
                    color: 'rgba(255, 255, 255, 0.31)',
                    border: "1px solid #F7F7F7",
                    textAlign: 'center',
                    borderRadius: "8px",
                    ml: "17px",
                    fontSize: "16px",
                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        display: "none",
                        m: "0"
                    }
                },
                '& button': {
                    mt: '10px',
                    mb: "25px"
                },
                [theme.breakpoints.between("sm", "lg")]: {
                    '& input': {
                        width: "42px",
                        height: "45px",
                        ml: "12px"
                    }
                },
                [theme.breakpoints.down("sm")]: {
                    '& input': {
                        width: "30px",
                        height: "35px",
                        ml: "12px"
                    }
                }
            })}>
                <LoginTitleComponent title={"Восстановление пароля"} />
                <Typography my={{ xs: "15px", lg: "25px" }} component="h5" sx={{
                    fontSize: { xs: "0.8rem", md: '15px', lg: "18px" },
                }}>Код</Typography>
                <AuthCode onChange={handleChange} allowedCharacters="numeric" containerClassName='authCodeContainer' />
                <Typography sx={{
                    height: "20px",
                    width: "80%",
                    color: "#9F0B45",
                    fontSize: "0.8rem",
                    width: "80%",
                    color: "#9F0B45",
                    fontSize: "0.8rem",
                    mb: "15px"
                }}
                    textAlign="center"
                >{text}</Typography>
                <LoginButtonComponent title="Отправить" />
            </Stack>
        </form >
    )
}
