// React
import React from 'react'
// MUI
import { Divider } from '@mui/material'

export default function Lines({width, up}) {
  return (
    <Divider
      variant="fullWidth"
      sx={{
        width: width,
        height: "2px",
        backgroundColor: "#9e094a",
        mt : !up ? 2.5 : "0",
        mb : up ? 1 : "0"
      }}
    />
  )
}