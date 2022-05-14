// React
import React, { useRef } from 'react'
// Components
import { TextField } from '@mui/material'



const inputChange = (ref, textFieldRef) => {
    if (ref?.current?.value?.length >= 4 && textFieldRef.current.nextSibling != null) {
        ref.current.value = ref.current.value.slice(0, 4)
        textFieldRef.current.nextSibling.children[0].children[0].focus()
    }
    else if (ref?.current?.value?.length < 1 && textFieldRef.current.previousSibling != null) {
        ref.current.value = ''
        let prevInput = textFieldRef.current.previousSibling.children[0].children[0]
        prevInput.focus()
    }
}

const inputChangeForKD = (e, ref, textFieldRef) => {
    if (e.code == 'Backspace' && e.target.value.length < 1 && textFieldRef.current.previousSibling != null) {
        let prevInput = textFieldRef.current.previousSibling.children[0].children[0]
        prevInput.focus()
    }
}

export default function BankCardInput({ handleOnChange, index, error }) {

    const ref = useRef(null);
    const textFieldRef = useRef(null)
    const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') };

    return (
        <TextField
            type="text"
            inputRef={ref}
            ref={textFieldRef}
            onChange={(e) => {
                inputChange(ref, textFieldRef);
                onlyNumbers(e);
                handleOnChange(ref, index)
            }}
            inputProps={{
                maxLength: 4
            }}
            onKeyDown={(e) => {
                inputChangeForKD(e, ref, textFieldRef)
            }}
            sx={theme => ({
                width: "10%",
                mr: "20px",
                "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
                    border: "none",
                    padding: "0",
                    outline: "none"
                },
                "& fieldset": {
                    border: "none"
                },
                "& input": {
                    background: error ? "rgba(158,9,74,.13)" : "rgba(255, 255, 255, 0.12)",
                    border: "1px solid white",
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
                        pl: "10px"
                    },
                    [theme.breakpoints.between("sm", "lg")]: {
                        fontSize: "16px",
                        pl: "14px"
                    },
                    "&:placeholder": {
                        pl: "47px"
                    }
                }
            })}
        />
    )
}
