// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import Menu from "../components/Menu/Menu";
import News from "../components/MainPageComponents/News/News";

export default function Main() {
  return (
    <Box>
      <Menu />
      <News />
    </Box>
  );
}