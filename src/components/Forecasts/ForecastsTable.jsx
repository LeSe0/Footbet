// React
import React from "react";
import { gamesBetData } from "../../data/data";
// Components
import { Table, TableCell, TableHead, TableRow, TableContainer, TableBody, Typography, Grid } from "@mui/material";

export default function ForecastsTable() {
  return (
    <TableContainer
      sx={{
        maxHeight: "600px"
      }}
    >
      <Table
        stickyHeader
        sx={{
          bgcolor: "#1B1A30"
        }}
      >
        <TableHead
          sx={{
            bgcolor: "#FFFFFF42"
          }}
        >
          <TableRow
            sx={{
              "& th": {
                color: "#0000007A",
                bgcolor: "#FFFFFF42",
                borderBottom: "none"
              }
            }}
          >
            <TableCell
              colSpan={3}
              align="right"
              sx={{
                mr: "15px"
              }}
            >
              прогноз
            </TableCell>
            <TableCell align="center">тип</TableCell>
            <TableCell align="center">дата</TableCell>
            <TableCell align="center">время</TableCell>
            <TableCell align="center">коэф.</TableCell>
            <TableCell colSpan={2} align="left">
              цена
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "& div, td, th, tb, p": {
              color: "white !important",
              fontSize: { xs: "10px", md: "12px", lg: "15px" }
            }
          }}
        >
          {gamesBetData.map((el, i) => {
            return (
              <TableRow
                key={"gamesBetTableRow" + i}
                sx={{
                  bgcolor: "#FFFFFF17"
                }}
              >
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="right">
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                      <Grid
                        container
                        sx={{
                          "& img": {
                            width: "46px",
                            height: "50px"
                          }
                        }}
                        alignItems="center"
                      >
                        <Typography>{el.homeCommandName}</Typography>
                        <img src={el.homeCommand} />
                      </Grid>
                    </Grid>
                    <Typography
                      fontWeight="700"
                      sx={{
                        fontSize: { xs: "13px", md: "15px", lg: "17px" }
                      }}
                    >
                      VS.
                    </Typography>
                    <Grid item>
                      <Grid
                        container
                        sx={{
                          "& img": {
                            width: "46px",
                            height: "50px"
                          }
                        }}
                        alignItems="center"
                      >
                        <img src={el.guestCommand} />
                        <Typography>{el.guestCommandName}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">{el.forecast}</TableCell>
                <TableCell align="center">{el.type}</TableCell>
                <TableCell align="center">{el.date}</TableCell>
                <TableCell align="center">{el.time}</TableCell>
                <TableCell align="center">{el.coefficient}</TableCell>
                <TableCell align="left">{el.price}</TableCell>
                <TableCell>Buy</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
