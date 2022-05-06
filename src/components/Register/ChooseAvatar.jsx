// React
import React, { useEffect, useRef } from 'react'
// components
import { Avatar, Box, Button, IconButton } from '@mui/material'
import ChooseImg from "../../images/Register/ChooseImg.svg"

export default function ChooseAvatar() {
    const imageRef = useRef()

    return (
        <Box sx={theme => ({
            alignSelf: 'center',
            justifyContent: "center",
            alignItems: "center",
            display: 'flex',
            mt: "40px",
            '& > *': {
                margin: theme.spacing(1),
            },
            '& input': {
                display: "none",
            }
        })}>
            <input accept="image/*" id="icon-button-file" type="file" onChange={(e) => {
                imageRef.current.src = URL.createObjectURL(e.target.files[0]);
            }} />
            <label htmlFor="icon-button-file">
                <IconButton component="span" sx={theme => ({
                    "& img": {
                        width: "300px",
                        height: "220px",
                        borderRadius: "8px"
                    },
                    [theme.breakpoints.down("sm")]: {
                        '& img': {
                            width: "220px",
                            height: "180px"
                        }
                    }
                })}>
                    <img src={ChooseImg} ref={imageRef} />
                </IconButton>
            </label>
        </Box >
    )
}
