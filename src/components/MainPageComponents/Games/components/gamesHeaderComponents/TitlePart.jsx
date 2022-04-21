// React
import React, { useState } from "react";

// components
import { Box } from "@mui/material";

// images
import calendarImg from "../../../../../images/Main/Games/Calendar.svg";
import Calendar from "../../../../Calendar/Calendar";

export default function TitlePart({
  selectCalendarActive,
  calendarActive,
  setDay,
  year,
  day,
  month,
  setYear,
  setMonth,
}) {
  const [anchorEl, setAnchorEl] = useState();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexBasis: "100%",
          justifyContent: "center",
          fontSize: "40px",
          lineHeight: "46px",
          whiteSpace: "pre",
          textOverflow: "ellipsis",
          overflow: "hidden",
          fontFamily: "Arimo",
          [theme.breakpoints.between("sm", "1024")]: {
            fontSize: "25px",
            lineHeight: "29px",
          },
          [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "12px",
            lineHeight: "14px",
            letterSpacing: ".18em",
          },
        })}
      >
        Результаты
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "flex-end",
          "& img": {
            width: "34px",
            height: "34px",
            cursor: "pointer",
            [theme.breakpoints.down("lg")]: {
              width: "16.5px",
              height: "16px",
            },
          },
        })}
      >
        <img
          src={calendarImg}
          onClick={(e) => {
            selectCalendarActive(true);
            setAnchorEl(e.currentTarget);
          }}
        />
        <Calendar
          open={calendarActive}
          closePopover={() => selectCalendarActive(false)}
          anchorEl={anchorEl}
          setDay={setDay}
          year={year}
          day={day}
          month={month}
          setYear={setYear}
          setMonth={setMonth}
        />
      </Box>
    </Box>
  );
}
