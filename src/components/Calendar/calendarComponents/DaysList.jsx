// React
import React from "react";
import { format } from "date-fns";
// MUI
import { Box, Typography } from "@mui/material";

export default function DaysList({ year, month, setDay, day, closePopover }) {
  let date = new Date(year, month);
  let date2 = new Date(year, month + 1);
  let daysInMonth = Math.round((date2 - date) / 1000 / 3600 / 24); // 31

  const days = [];
  for (let i = 0; i < date.getDay() + 1; i++) {
    days.push({ day: "", active: false, btn: false });
  }

  for (let i = 1; i < daysInMonth + 1; i++) {
    days.push({ day: i, active: true, btn: true });
  }

  let dateForNextMonthDays = new Date(year, month + 1, 30).getDay();

  for (let i = 1; i <= 7 - dateForNextMonthDays + 2; i++) {
    days.push({ day: "", active: false, btn: false });
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(7 , auto)",
        padding: "0 60px 0 62px",
      }}
    >
      {days.map((el, i) => {
        return (
          <Box
            key={"daysList" + i}
            sx={{
              display: "flex",
              justifyContent: "center",
              background:
                new Date().getMonth() == month &&
                el.day == new Date().getDate() &&
                new Date().getFullYear() == 2022
                  ? "#FFFF76"
                  : "white",
              cursor: el.btn && "pointer",
              "&:hover": {
                background:
                  new Date().getMonth() == month &&
                  el.day == new Date().getDate() &&
                  new Date().getFullYear() == 2022 &&
                  el.btn == true
                    ? "#ffffa9"
                    : "#e6e6e6",
              },
            }}
            onClick = {() =>{
              el.btn && setDay(el.day);
              el.btn && closePopover()
            }}
          >
            <Typography
              component="span"
              className={
                el.active
                  ? `${el.day == day ? "activeDay" : "disabledDay"}`
                  : "disactiveDay"
              }
              onClick={() => {
                if (el.active) {
                  setDay(el.day);
                }
              }}
              sx={{
                fontSize: "20px",
                color:
                  format(new Date(year, month, el.day), "EEEE") == "Thursday" ||
                  format(new Date(year, month, el.day), "EEEE") == "Friday"
                    ? "#D10000"
                    : "black",
              }}
            >
              {el.day}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}