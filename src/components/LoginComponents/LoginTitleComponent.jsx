// React
import React from "react";
import { Typography } from "@mui/material";

export default function LoginTitleComponent({ title }) {
  return (
    <Typography
      sx={{
        fontFamily: "Arimo",
        fontWeight: "400",
        fontSize: { xs: "18px", md: "24px", lg: "30px" },
        pt: "10px",
      }}
    >
      {title}
    </Typography>
  );
}