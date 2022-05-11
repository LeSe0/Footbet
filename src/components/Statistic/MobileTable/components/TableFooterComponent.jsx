// React
import React from 'react'
// components
import { Grid, Stack, Typography } from '@mui/material'

export default function TableFooterComponent({ el }) {
    return (
        <Grid container justifyContent="space-around" sx={{
            mt: "20px",
            '& p': {
                textAlign: "center"
            }
        }}>
            <Stack alignItems="center" justifyContent="center">
                <Typography sx={{
                    p: "10px",
                    bgcolor: el.decision == "Победа" ? "#0C7617" : el.decision == "Поражение" ? "#B10000" : "#B4AC00",
                    textAlign: "center",
                    borderRadius: "4px"
                }}>{el.decision}</Typography>
            </Stack>
            <Stack sx={{
                display: el.forecast ? "flex" : "none",
                color: "white",
            }}>
                <Typography fontWeight="700">прогноз</Typography>
                <Typography border="1px solid white" py="2px" borderRadius="4px" px="4px">{el.forecast}</Typography>
            </Stack>
        </Grid >
    )
}
