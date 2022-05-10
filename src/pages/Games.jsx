// React
import React from "react";
// components
import { Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
// import { Games as Lyov } from "yo";
import ContentTitle from "../helpers/ContentTitle";

export default function Games() {
  return (
    <Stack alignItems="center">
      <Menu />
      <ContentTitle title="Игры" />
      {/* <Lyov /> */}
    </Stack>
  );
}
