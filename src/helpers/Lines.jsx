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
      marginBottom: "8px",
      backgroundColor: "#9e094a",
      mt : !up ? "8px" : "0",
      mb : up ? "8px" : "0"
    }}
  ></Divider>
  )
}