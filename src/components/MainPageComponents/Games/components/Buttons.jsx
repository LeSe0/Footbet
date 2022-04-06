// React
import React, { useState } from "react";
// MUI
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

export default function Buttons() {
  const [activeId, setActiveId] = useState(0);

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
            key = {el.title + i}
          />
        );
      })}
    </Box>
  );
}