// React
import React, { useState } from "react";
import { format } from "date-fns";
// MUI
import { Box , Stack } from "@mui/material";
// components
import ContentTitle from "../../../helpers/ContentTitle";
import Buttons from "./components/Buttons";
import Gamesheader from "./components/Gamesheader";
import GamesItems from "./components/GamesContentComponents/GamesItems";

export default function Games() {
  const [selectedDay, selectDay] = useState(format(new Date(), "dd MM yyyy"));
  const [calendarActive, selectCalendarActive] = useState(false);

  return (
    <Box>
      <ContentTitle title="Матчи" />
      <Buttons />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            width: "88vw",
            backgroundColor: "#0C0B22",
            height: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Gamesheader
            selectedDay={selectedDay}
            selectDay={selectDay}
            calendarActive={calendarActive}
            selectCalendarActive={selectCalendarActive}
          />
          <GamesItems />
        </Stack>
      </Box>
    </Box>
  );
}