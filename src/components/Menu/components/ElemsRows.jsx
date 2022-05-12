// React
import React, { memo } from "react";
// components
import { Box } from "@mui/material";
import Button from "../../../helpers/Button";
import { Link } from "react-router-dom";

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
        '& a': {
          textDecoration: "none"
        }
      }}
    >
      {menuData.map((el, i) => {
        return (
          <Box key={"menuItem" + i}>
            <Link key={el.title + i} to={el.path}>
              <Button
                el={el}
                id={i}
                activeId={activeId}
                setActiveId={setActiveId}
                setOpenModal={setOpenModal}
              />
            </Link>
          </Box>);
      })}
    </Box >
  );
})

export default ElemsRows
