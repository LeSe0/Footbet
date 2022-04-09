// React
import React from "react";
// MUI
import { Box, Typography } from "@mui/material";

export default function Commands({
  homeComand,
  homeIcon,
  guestComand,
  guestIcon,
  score,
  started
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pr: started == "начался" ? "2%" : '3.2%'
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Typography
          component="span"
          sx={(theme) => ({
            mr: "27px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arsenal",
            fontSize: "16px",
            fontWeight: 400,
            color: "white",
            [theme.breakpoints.down("md")]: {
              order: 2,
              mr: "0",
              fontFamily: "Segoe UI",
              fontSize: "10px",
              fontWeight: 400,
            },
          })}
        >
          {homeComand}
        </Typography>
        <Typography
          component="span"
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: "3px",
            "& img": {
              width: "32px",
              height: "44px",
              [theme.breakpoints.down("lg")]: {
                width: "22px",
                height: "25px",
              },
            },
          })}
        >
          <img src={homeIcon} />
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          fontFamily: "Cuprum",
          fontSize: "35px",
          fontWeight: "700",
          minWidth: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mr : "30px",
          ml : "30px",
          color : "#0BBE28",
          [theme.breakpoints.down("md")]: {
            fontSize: "16px",
          },
          [theme.breakpoints.between("md", "lg")]: {
            fontSize: "15px",
          },
        })}
      >
        {score}
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Typography
          component="span"
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: "3px",         
            mr: "27px",
            "& img": {
              width: "32px",
              height: "44px",
              [theme.breakpoints.down("lg")]: {
                width: "22px",
                height: "25px",
              },
            },
          })}
        >
          <img src={guestIcon} />
        </Typography>
        <Typography
          component="span"
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arsenal",
            fontSize: "16px",
            fontWeight: 400,
            color: "white",
            [theme.breakpoints.down("md")]: {
              mr: "0",
              fontFamily: "Segoe UI",
              fontSize: "10px",
              fontWeight: 400,
            },
          })}
        >
          {guestComand}
        </Typography>
      </Box>
    </Box>
  );
}