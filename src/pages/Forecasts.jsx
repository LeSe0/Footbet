// React
import React, { useState } from "react";
// Components
import { Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
import ForecastsTable from "../components/Forecasts/ForecastsTable";


export default function Forecasts() {

  return (
    <Stack mb = "100px">
        <Menu />
        <ForecastsTable />
    </Stack>
  );
}
