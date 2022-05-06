// React
import React from 'react'
// components
import { Box, Grid, TextField } from '@mui/material'

export default function Input({ type, setNewValue, icon, placeholder, validateInputs }) {

    let text = "";
    if (validateInputs?.error?.details) {
        if (validateInputs?.error?.details) {
            for (let i = 0; i < validateInputs.error.details?.length; i++) {
                console.log(validateInputs.error.details[i].context.key);
                // if ( == type
                // ) {
                //     text = "Incorrect email";
                // } else if (
                //     type == "password" &&
                //     validateInputs.error.details[i].context.key == type
                // ) {
                //     text = "Incorrect password";
                // } else if (
                //     type == "text" &&
                //     validateInputs.error.details[i].context.key == type
                // ) {
                //     text = "Incorrect password";
                // }
            }
        }
    }

    return (
        <Grid container>
            <img src={icon} />
            <TextField sx={(theme) => ({
                width: "80%",
                mt: placeholder == "Пароль" ? "4%" : "7%",
                "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
                    border: "none",
                    padding: "0",
                    outline: "none",
                },
                "& fieldset": {
                    border: "none",
                },
                "& input": {
                    background: validateInputs?.error && text.length > 0
                        ? "rgba(158,9,74,.13)"
                        : "rgba(255, 255, 255, 0.12)",
                    border:
                        "1px solid" + validateInputs?.error && text.length > 0 ? "#9e094a21" : "#F7F7F7",
                    color: "#FFFFFF66",
                    fontFamily: "Arsenal",
                    fontWeight: "400px !important",
                    fontSize: "18px",
                    overflow: "auto !important",
                    borderRadius: "8px",
                    width: "100%",
                    height: "2.7%",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "16px",
                        pl: "10px",
                    },
                    [theme.breakpoints.between("sm", "lg")]: {
                        fontSize: "16px",
                        pl: "14px",
                    },
                    "&:placeholder": {
                        pl: "47px",
                    },
                },
            })} type={type} placeholder={placeholder} onChange={(e) => {
                setNewValue(e.target.value)
            }} />
        </Grid>
    )
}
