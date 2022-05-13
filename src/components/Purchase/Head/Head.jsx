// React
import React from 'react'
// Components
import Commands from './components/Commands'
import { Stack } from '@mui/material'
import Information from './components/Information'

export default function Head() {
  return (
      <Stack mt = "40px">
        <Commands />
        <Information />
      </Stack>
  )
}
