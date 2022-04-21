// React
import React, { memo } from "react";

// components
import { Paper, Popover } from "@mui/material";
import DayNames from "./calendarComponents/DayNames";
import DaysList from "./calendarComponents/DaysList";
import Footer from "./calendarComponents/Footer";
import Header from "./calendarComponents/header";

const dayNames = [
  {
    shortName: "пн",
    longName: "понедельник",
  },
  {
    shortName: "вт",
    longName: "вторник",
  },
  {
    shortName: "ср",
    longName: "среда",
  },
  {
    shortName: "чт",
    longName: "четверг",
  },
  {
    shortName: "пт",
    longName: "пятница",
  },
  {
    shortName: "сб",
    longName: "суббота",
  },
  {
    shortName: "вс",
    longName: "воскресенье",
  },
];

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Calendar = memo(({
  open,
  closePopover,
  anchorEl,
  setDay,
  year,
  day,
  month,
  setYear,
  setMonth,
}) => {
  return (
    <Popover
      open={open}
      onClose={closePopover}
      anchorEl={anchorEl}
      sx={{
        background: "rgba(0,0,0,0.1)",
        zIndex: "99999",
        "& .MuiPaper-root": {
          height: "min-content",
          overflow: "hidden",
        },
      }}
    >
      <Paper
        sx={{
          top: "20px",
          width: "435px",
          maxWidth: "100%",
          background: "#fff",
          fontFamily: "Arial,Helvetica,sans-serif",
          lineHeight: "1.125em",
          zIndex: "10",
          padding: "0 33.5px 50px",
          position: "relative",
          zIndex: "999",
          overflowY: "hidden",
        }}
      >
        <Header
          year={year}
          month={month}
          monthNames={monthNames}
        />
        <DayNames dayNames={dayNames} />
        <DaysList
          year={year}
          month={month}
          setDay={setDay}
          day={day}
          closePopover={closePopover}
        />
        <Footer
          year={year}
          month={month}
          setMonth={setMonth}
          setYear={setYear}
          setDay={setDay}
          monthNames={monthNames}
        />
      </Paper>
    </Popover>
  );
})

export default Calendar
