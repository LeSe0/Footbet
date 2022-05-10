// React
import React from "react";
// Components
import { Box } from "@mui/material";

export default function Button() {
  return (
    <Box
      sx={theme => ({
        width: "79px",
        height: "27px",
        background: "#FFFFFF33",
        border: "1px solid white",
        color: "white",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
        cursor: "pointer",
        mr: "3px",
        fontSize: "14px",
        "&:hover": {
          background: "#A10B45",
          border: "none"
        },
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "14px",
          width: "79px"
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
          width: "53px"
        }
      })}
    >
      Купить
    </Box>
  );
}
