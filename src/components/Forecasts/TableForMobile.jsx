// React
import React from 'react'
import { gamesBetData } from '../../data/data'
// Components
import { Box, Stack } from '@mui/material'
import MobileTableItem from './MobileTable/MobileTableItem'

export default function TableForMobile() {
    return (
        <Stack sx={{
            maxHeight: "900px",
            border: "1px solid white",
            bgcolor: "#1B1A30",
            color: "white",
            width: "100%",
            overflow: "auto",
            mt: "50px"
        }}>
            {gamesBetData.map((el, i) => {
                return (
                    <Box key={"mobileGameBetItem" + i}>
                        <MobileTableItem el={el} index={i + 1} />
                    </Box>
                )
            })}
        </Stack>
    )
}
