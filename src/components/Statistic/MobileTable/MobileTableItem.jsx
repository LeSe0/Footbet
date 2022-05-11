// React
import React from 'react'
// Components
import { Stack } from "@mui/material"
import TableHeadComponent from './components/TableHeadComponent'
import TableFooterComponent from './components/TableFooterComponent'

export default function MobileTableItem({ el, index }) {
    return (
        <Stack sx={theme => ({
            mt: index != 1 && "20px",
            bgcolor: "rgba(255, 255, 255, 0.09)",
            py: "15px",
            "& p": {
                fontSize: "13px",
            },
            [theme.breakpoints.down("360")]: {
                '& p': {
                    fontSize: "10px"
                }
            },
            [theme.breakpoints.down("310")]: {
                '& p': {
                    fontSize: "8px"
                }
            }
        })}>
            <TableHeadComponent el={el} index={index} />
            <TableFooterComponent el={el} />
        </Stack >
    )
}
