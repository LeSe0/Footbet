// React
import React from 'react'
// components
import { Grid, Stack, Typography } from '@mui/material'
import BuyButton from "../../BuyButton"

export default function TableFooterComponent({ el }) {
    return (
        <Grid container justifyContent="space-around" sx={{
            mt: "20px",
            '& p': {
                textAlign: "center"
            }
        }}>
            <BuyButton />
            <Stack sx={{
                display: el.forecast ? "flex" : "none",
                color: "white",
            }}>
                <Typography fontWeight="700">прогноз</Typography>
                <Typography>{el.forecast}</Typography>
            </Stack>
            <Stack sx={{
                display: el.forecast ? "flex" : "none",
                color: "white"
            }}>
                <Typography fontWeight="700">цена</Typography>
                <Typography>{el.price}</Typography>
            </Stack>
        </Grid>
    )
}
