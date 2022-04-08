// React
import React from "react";
// MUI
import { Box, Typography } from "@mui/material";

function Header({ year, month, setYear, setMonth, monthNames, setDay }) {
  return (
    <Box sx = {{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingLeft: '60px',
      paddingright: '60px',
      height: 'max-content',
    }}>
      <Typography component = "span" sx = {{
        fontWeight: 700,
        fontSize: '26px',
        lineHeight: '20px',
        color: '#000',
      }}>{monthNames[month]} {year}</Typography>
    </Box>
  );
}

export default Header;