// React
import React from "react";
//  MUI
import { Stack } from "@mui/material";
// components
import TitlePart from "./gamesHeaderComponents/TitlePart";

export default function Gamesheader({
  selectDay,
  selectedDay,
  selectCalendarActive,
  calendarActive,
}) {
  return (
    <Stack
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "88%",
      }}
    >
      <TitlePart
        selectedDay={selectedDay}
        selectDay={selectDay}
        calendarActive={calendarActive}
        selectCalendarActive={selectCalendarActive}
      />
    </Stack>
  );
}