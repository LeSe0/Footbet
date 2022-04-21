// React
import React from "react";

// components
import { Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        width: "7vw",
        backgroundColor: "#FFFFFF12",
        left: "0px",
        top: "0",
        bottom: "0",
        zIndex: "2",
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
      <ArrowBack
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

export default PrevArrow
