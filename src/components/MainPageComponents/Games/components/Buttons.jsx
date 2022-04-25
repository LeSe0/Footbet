// React
import React, { memo } from "react";
// components
import { Box } from "@mui/material";
import Button from "../../../../helpers/Button";

const buttonsData = [
  {
    title: "Матчи дня",
  },
  {
    title: "Правила игры",
  },
];

const Buttons = memo(({ activeId, setActiveId }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {buttonsData.map((el, i) => {
        return (
          <Button
            id={i}
            activeId={activeId}
            setActiveId={setActiveId}
            el={el}
            key={el.title + i}
          />
        );
      })}
    </Box>
  );
})

export default Buttons