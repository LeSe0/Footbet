// React
import React from "react";
// MUI
import { Box } from "@mui/material";

export default function ForecastButtons() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "row",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Cuprum",
          fontSize: "20px",
          fontWeight: "700",
          color: "white",
          width: "147px",
          height: "45px !important",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          cursor: "pointer",
          [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "18px",
            borderRadius: "4px",
            width: "79px",
            height: "30px !important",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
            borderRadius: "4px",
            width: "49px",
            height: "20px !important",
          },
        })}
      >
        Прогноз
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Cuprum",
          fontSize: "18px",
          fontWeight: "400",
          color: "white",
          pl: "18px",
          pr: "18px",
          pt: "7px",
          pb: "7px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          border: "2px solid white",
          height: "min-content !important",
          width: "max-content !important",
          mt: "23px",
          mb: "43px",
          cursor: "pointer",
          [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "18px",
            borderRadius: "4px",
            width: "79px",
            height: "30px !important",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
            borderRadius: "4px",
            width: "49px",
            height: "20px !important",
            mb: "0",
            mt: "0",
            pr: "7px",
            pl: "7px",
            pb: "0",
            pt: "0",
            ml: "9px",
          },
        })}
      >
        Купить
      </Box>
    </Box>
  );
}