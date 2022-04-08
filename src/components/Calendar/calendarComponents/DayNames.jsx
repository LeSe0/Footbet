// React
import React from "react";
// MUI
import { Box } from "@mui/material";

function DayNames({ dayNames }) {
  return (
    <Box sx = {{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, auto)',
      padding: '23px 60px 20px 62px',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '.75em',
      height: 'min-content',
    }}>
      {dayNames.map((el, i) => {
        return (
          <Box key={"dayName" + i} sx = {{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '20px',
            textDecorationLine: 'none',
            textUnderlinePosition: 'under',
            color: '#000',
            borderBottom : "3px solid"
          }}>
            {el.shortName}
          </Box>
        );
      })}
    </Box>
  );
}

export default DayNames;