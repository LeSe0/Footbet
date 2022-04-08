// React
import React from "react";
// MUI
import { Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function NextArrow(props) {
  const { className, onClick } = props;

  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        right: "3%",
        top: "45%",
        zIndex: "1",
        [theme.breakpoints.down("sm")]: {
          right: "10%",
        },
      })}
    >
      <ArrowForward
        sx={{
          cursor: "pointer",
          color: "#9E094A",
          width: "36px",
          height: "34px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          "&:hover": {
            color: "#9E094A",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
          },
        }}
        onClick={onClick}
        className={className}
      />
    </Box>
  );
}