// React
import React from "react";
// MUI
import { Box } from "@mui/material";

export default function ContentTitle({ title }) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
          pt: "10px",
          pb: "10px",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "25px",
          pt: "25px",
          pb: "25px",
        },
        [theme.breakpoints.up("md")]: {
          pt: "33px",
          pb: "33px",
          fontSize: "30px",
        },
        [theme.breakpoints.up("lg")] : {
            pt : "40px",
            pb : "40px",
            fontSize : "40px",
        }
      })}
    >
      {title}
    </Box>
  );
}