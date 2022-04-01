// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import Menu from "../components/Menu/Menu";

export default function Main() {
  return (
    <Box sx = {{
      background : "#12112c"
    }}>
      <Menu />
    </Box>
  );
}