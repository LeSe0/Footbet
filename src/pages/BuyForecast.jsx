// React
import React from 'react'
// Components
import { Stack } from '@mui/material'
import Menu from "../components/Menu/Menu";
import Head from '../components/Purchase/Head/Head';
import Content from '../components/Purchase/Content/Content';
import Purchase from '../components/Purchase/Purchase/Purchase';

export default function BuyForecast() {
  return (
    <Stack sx = {{
        "& div , p, span" : {
            fontFamily : "Arsenal",
            color : "white"
        }
    }}>
        <Menu />
        <Head />
        <Content />
        <Purchase />
    </Stack>
  )
}