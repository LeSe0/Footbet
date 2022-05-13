// React
import React, { useEffect, useState } from 'react'
// Components
import { Grid } from "@mui/material"
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
            return value + prevValue
        })
        setCardNumber(result)
    }

    return (
        <Grid container>
            {inputsData.map((el, i) => {
                return <BankCardInput validateInputs={validateInputs} handleOnChange={handleOnChange} key={"bankCardInput" + i} index={i} values={values} />
            })}
        </Grid>
    )
}
