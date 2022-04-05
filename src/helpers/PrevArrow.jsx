// React
import React from "react";
// MUI
import { Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function PrevArrow(props) {
  const { className, onClick } = props;

  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        left: "3%",
        top: "45%",
        zIndex: "99999",
        [theme.breakpoints.down("sm")]: {
          left: "10%",
        },
      })}
    >
      <ArrowBack
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