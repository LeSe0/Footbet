// React
import React from "react";
// components
import { Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
import Games from "../components/MainPageComponents/Games/Games";

export default function GamesPage() {
  return (
    <Stack alignItems="center" mb = "100px">
      <Menu />
      <Games />
    </Stack>
  );
}
