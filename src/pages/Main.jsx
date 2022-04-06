// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import Menu from "../components/Menu/Menu";
import News from "../components/MainPageComponents/News/News";
import Games from "../components/MainPageComponents/Games/Games";

export default function Main() {
  return (
    <Box>
      <Menu />
      <News />
      <Games />
    </Box>
  );
}