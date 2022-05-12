// React
import React from "react";
// Components
import { Grid, TableCell, Typography, useMediaQuery, TableRow } from "@mui/material";

export default function TableItem({ el, i }) {
  const housandPx = useMediaQuery("(min-width:1000px)");

  return (
    <TableRow
      key={"statisticItemGamesRow" + i}
      sx={{
        bgcolor: "#FFFFFF17",
        "& td": {
          border: "none",
          borderSpacing: "0 10px",
          borderTop: i != 0 && "20px solid #1B1A30"
        },

      }}
    >
      <TableCell align="center">{i + 1}</TableCell>
      <TableCell align="right" px="0">
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-evenly" }}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid item>
            <Grid
              container
              sx={theme => ({
                "& img": {
                  width: "46px",
                  height: "50px",
                  mr: { xs: "0", md: "10px" }
                },
                [theme.breakpoints.between("md", "lg")]: {
                  "& img": {
                    width: "30px",
                    height: "40px"
                  }
                },
                [theme.breakpoints.down("md")]: {
                  "& img": {
                    width: "20px",
                    height: "30px"
                  }
                }
              })}
              alignItems="center"
            >
              <Typography
                sx={{
                  mr: "10px",
                  display: housandPx ? "block" : "none"
                }}
              >
                {el.homeCommandName}
              </Typography>
              <img src={el.homeCommand} />
            </Grid>
          </Grid>
          <Typography
            fontWeight="700"
            sx={{
              fontSize: { xs: "13px", sm: "14px", lg: "17px" }
            }}
          >
            VS.
          </Typography>
          <Grid item>
            <Grid
              container
              sx={theme => ({
                "& img": {
                  width: "46px",
                  height: "50px",
                  ml: { xs: "0", md: "10px" }
                },
                [theme.breakpoints.between("md", "lg")]: {
                  "& img": {
                    width: "30px",
                    height: "40px"
                  }
                },
                [theme.breakpoints.down("md")]: {
                  "& img": {
                    width: "20px",
                    height: "30px"
                  }
                }
              })}
              alignItems="center"
            >
              <img src={el.guestCommand} />
              <Typography
                sx={{
                  ml: "10px",
                  display: housandPx ? "block" : "none"
                }}
              >
                {el.guestCommandName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Typography
          sx={{
            bgcolor: "#9E094A",
            p: "5px",
          }}
        >
          {el.forecast}
        </Typography>
      </TableCell>
      <TableCell align="center">{el.date}</TableCell>
      <TableCell align="center">{el.time}</TableCell>
      <TableCell align='center'>{el.check}</TableCell>
      <TableCell sx={{
        pl: "0",
      }}>
        <Typography sx={{
          p: "10px",
          bgcolor: el.decision == "Победа" ? "#0C7617" : el.decision == "Поражение" ? "#B10000" : "#B4AC00",
          textAlign: "center"
        }}>{el.decision}</Typography>
      </TableCell>
    </TableRow>
  );
}