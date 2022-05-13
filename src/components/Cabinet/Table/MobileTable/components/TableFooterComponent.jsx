// React
import React from 'react'
// components
import { Grid, Stack, Typography } from '@mui/material'

export default function TableFooterComponent({ el }) {
    return (
        <Grid container justifyContent="space-around" sx={{
            mt: "20px",
            mx: "15px",
            '& p': {
                textAlign: "center"
            }
        }}>
            <Stack sx={{
                display: el.forecast ? "flex" : "none",
                color: "white",
            }}>
                <Typography fontWeight="700">прогноз</Typography>
                <Typography bgcolor = "#9E094A" py="2px" borderRadius="4px" px="4px">{el.forecast}</Typography>
            </Stack>
            <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight="700">цена</Typography>
                <Typography textAlign = "center">{el.price}</Typography>
            </Stack>
        </Grid >
    )
}
