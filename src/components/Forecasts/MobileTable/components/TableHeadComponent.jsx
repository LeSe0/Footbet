// React
import React from 'react'
// components
import { Grid, Stack, Typography } from '@mui/material'

export default function TableHeadComponent({ el, index }) {
    return (
        <Grid container sx={{
            flexWrap: "nowrap",
        }}>
            <Typography textAlign="center" sx={{
                mr: "10px",
                width: "30px",
                fontSize: "12px",
                ml: "10px"
            }}>{index}.</Typography>
            <Grid container justifyContent="center" sx={{
                '& img': {
                    width: "30px",
                    height: "30px"
                },
            }}>
                <Stack alignItems="center" sx={{
                    pr: "30px",
                    borderRight: "1px solid white"
                }}>
                    <img src={el.homeCommand} />
                    <Typography>{el.homeCommandName}</Typography>
                </Stack>
                <Stack alignItems="center" p="10px" color="white">
                    <Typography>{el.mobileDate}</Typography>
                    <Typography>{el.time}</Typography>
                </Stack>
                <Stack alignItems="center" sx={{
                    pl: "30px",
                    borderLeft: "1px solid white"
                }}>
                    <img src={el.guestCommand} />
                    <Typography>{el.guestCommandName}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}
