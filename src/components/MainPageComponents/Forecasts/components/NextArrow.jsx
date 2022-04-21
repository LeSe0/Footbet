// React
import React from "react";
// MUI
import { Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function NextArrow(props) {
  const { onClick } = props;

  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        right: "0px",
        width: "7vw",
        backgroundColor: "#FFFFFF12",
        zIndex: "2",
        top: "0",
        bottom: "0",
        transform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          width: "34px",
        },
      })}
      onClick={onClick}
    >
      <ArrowForward
        sx={(theme) => ({
          width: "42px",
          height: "37px",
          color: "#AE0B48",
          [theme.breakpoints.down("sm")]: {
            width: "17px",
            height: "17px",
          },
        })}
      />
    </Box>
  );
}