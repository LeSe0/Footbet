// React
import React, { useState } from "react";

// components
import TitlePart from "./gamesHeaderComponents/TitlePart";
import DaysPart from "./gamesHeaderComponents/DaysPart";
import { Stack } from "@mui/material";

export default function Gamesheader({
  selectDay,
  selectedDay,
  selectCalendarActive,
  calendarActive,
}) {
  let [month, setMonth] = useState(2);
  let [year, setYear] = useState(2022);
  let [day, setDay] = useState(1);

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
        setDay={setDay}
        year={year}
        day={day}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      />
      <DaysPart />
    </Stack>
  );
}
