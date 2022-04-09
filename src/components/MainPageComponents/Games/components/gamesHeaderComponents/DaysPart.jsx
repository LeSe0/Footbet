// React
import React, { useState } from "react";
// MUI
import { Grid, Typography } from "@mui/material";
import { addDays, format } from "date-fns";

export default function DaysPart() {
  let today = new Date();
  let yesterday = addDays(today, -1);
  let tomorrow = addDays(today, 1);
  const [active, setActive] = useState(1);

  const days = [
    {
      date: format(yesterday, "dd.MM.yyyy"),
      title: "Вчера",
    },
    {
      date: format(today, "dd.MM.yyyy"),
      title: "Сегодня",
    },
    {
      date: format(tomorrow, "dd.MM.yyyy"),
      title: "Завтра",
    },
  ];

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      {days.map((el, i) => {
        return (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: "35px",
            }}
            key={el.title + i}
          >
            <Typography
              sx={(theme) => ({
                textDecoration: active == i && "underline",
                fontSize: "29px",
                fontWeight: active == i && 700,
                borderLeft: i == 1 && "1px solid #D10A52",
                borderRight: i == 1 && "1px solid #D10A52",
                pr: i == 1 && "19px",
                pl: i == 1 && "19px",
                mr: i == 1 && "19px",
                ml: i == 1 && "19px",
                cursor: "pointer",
                fontFamily: "Arimo",
                [theme.breakpoints.down("lg")]: {
                  fontSize: "16px",
                },
              })}
              onClick={() => {
                active != i && setActive(i);
              }}
            >
              {el.title}
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: "700",
                fontSize: "12px",
                color: "#D10A52",
                fontFamily: "Arimo",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "17px",
                },
              })}
            >
              {el.date}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}