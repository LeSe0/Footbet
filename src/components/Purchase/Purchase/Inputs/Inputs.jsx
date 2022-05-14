// React
import React, { useCallback, useState } from "react";
// Components
import { Button, Stack, Typography } from "@mui/material";
import LoginInput from "./components/LoginInput";
import Joi from "joi";
import BankCardInputContainer from "./BankCardInputContainer";

export default function Inputs() {
    const [fio, setFio] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardValidDate, setValidDate] = useState("");

    const [validateInputs, validation] = useState({
        value: {
            fio: '',
            cardNumber: '',
            cvv: "",
            cardValidDate: ""
        }
    });

    const scheme = Joi.object().keys({
        fio: Joi.string().min(5).required(),
        cardNumber: Joi.string().regex(/^.{15,}$/).required(),
        cvv: Joi.number().min(3).max(3).required(),
        cardValidDate: Joi.date().min("1-1-2022").max("1-1-2028").required()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        validation(
            scheme.validate(
                {
                    fio: fio,
                    cardNumber: cardNumber,
                    cvv: cvv,
                    cardValidDate: cardValidDate
                },
                { abortEarly: false }
            )
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <LoginInput fio={fio} setFio={setFio} validateInputs={validateInputs} />
                <Typography sx={{
                    fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "15px" }
                }}>номер карты</Typography>
                <BankCardInputContainer setCardNumber={setCardNumber} cardNumber={cardNumber} validateInputs={validateInputs} />
                <Button type="submit">asdasd</Button>
            </Stack>
        </form>
    );
}