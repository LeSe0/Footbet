// React
import React from "react";
// MUI
import { Typography } from "@mui/material";

export default function ContentTitle({ title }) {
  return (
    <Typography textAlign="center" variant="h3"
      sx={{
        color: "white",
        pt: "1em",
        pb: "1em",
        fontSize: {xs: "13px", sm: "25px", md: "30px", lg:"40px"}
      }}
    >
      {title}
    </Typography>
  );
}