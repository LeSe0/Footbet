// React
import React, { memo } from "react";

// components
import { Box, Typography } from "@mui/material";

const Header = memo(({
  year,
  month,
  monthNames,
}) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingLeft: '60px',
      paddingright: '60px',
      height: 'max-content',
    }}>
      <Typography component="span" sx={{
        fontWeight: 700,
        fontSize: '26px',
        lineHeight: '20px',
        color: '#000',
      }}>{monthNames[month]} {year}</Typography>
    </Box>
  );
})

export default Header;
