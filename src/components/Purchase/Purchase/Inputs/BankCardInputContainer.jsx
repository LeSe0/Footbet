// React
import React, { useEffect, useState } from 'react'
// Components
import { Grid, Stack, Typography } from "@mui/material"
import BankCardInput from './components/BankCardInput'

const inputsData = [
    {
        id: 0,
        key: "bankCardInput1"
    },
    {
        id: 1,
        key: "bankCardInput2"
    },
    {
        id: 2,
        key: "bankCardInput3"
    },
    {
        id: 3,
        key: "bankCardInput4"
    }
]

export default function BankCardInputContainer({ validateInputs, setCardNumber }) {

    const [values, setValues] = useState(["", "", "", ""])

    const handleOnChange = (ref, index) => {
        let newValues = [...values];
        newValues[index] = ref.current.value
        setValues(newValues);

        let result = values.reduce((value, prevValue) => {
            console.log(value + prevValue);
            return value + prevValue
        })
        setCardNumber(result)
    }


    let text = "";

    for (let i = 0; i < validateInputs?.error?.details?.length; i++) {
        if (validateInputs?.error?.details[i].context.key == "cardNumber") {
            text = "Card number is wrong"
        }
    }

    return (
        <Stack>
            <Grid container>
                {inputsData.map((el, i) => {
                    return <BankCardInput
                        handleOnChange={handleOnChange}
                        key={el.key}
                        index={i}
                        error = {text}
                    />
                })}
            </Grid>
            <Typography sx={{
                height: "20px",
                width: "80%",
                color: "#9F0B45",
                fontSize: "0.8rem",
                width: "80%",
                color: "#9F0B45 !important",
                fontSize: "0.8rem"
            }}
                textAlign="left">{text}</Typography>
        </Stack>
    )
}
