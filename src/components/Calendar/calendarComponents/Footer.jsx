// React
import React, { memo } from "react";

// components
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = memo(({
  year,
  month,
  setMonth,
  setDay,
  setYear,
  monthNames,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ArrowBack
        onClick={() => {
          if (year == 2022 && month > 0) {
            setMonth(--month);
            month < 0 && --year;
            month < 0 && setMonth(11);
          } else if (year > 2022) {
            setMonth(--month);
            month < 0 && setYear(--year);
            month < 0 && setMonth(11);
          }
          setDay(1);
        }}
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
      />
      <ArrowForward
        onClick={() => {
          setMonth(++month);
          month == monthNames.length && setYear(++year);
          month == monthNames.length && setMonth(0);
          setDay(1);
        }}
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
      />
    </Box>
  );
})

export default Footer
