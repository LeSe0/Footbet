// React
import React, { memo } from "react";

// components
import { Box } from "@mui/material";
import Button from "../../../helpers/Button";

const ElemsRows = memo(({
  menuData,
  activeId,
  setActiveId,
  setOpenModal
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {menuData.map((el, i) => {
        return (
          <Box key={el.title + i} onClick={() => {
            el.path == "contacts" && setOpenModal(true)
          }}>
            <Button
              el={el}
              id={i}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          </Box>
        );
      })}
    </Box>
  );
})

export default ElemsRows
