// React
import React, { useState } from "react";
// MUI
import { Box, Stack } from "@mui/material";
import WebSitePopover from "./WebSitePopover";

export default function HeaderWebSites({webSitesData}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeId, setActiveId] = useState();

  const handleClick = (id) => (event) => {
    setAnchorEl(event.currentTarget);
    setActiveId(id);
  };

  return (
    <Stack
      sx={{
        width: "min-content",
        color: "#fff",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          height: "314px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {webSitesData.map((el, i) => {
          return (
            <Box key={el.content + i}>
              <Box
                sx={{
                  height: "4vh",
                  width: "2vw",
                  borderBottom: "1px solid #D10A52",
                  background: "#161124",
                  mb: "5px",
                  cursor: "pointer",
                }}
                onClick={handleClick(i)}
              >
                <img src={el.icon} height="100%" width="100%" />
              </Box>
              <WebSitePopover
                el={el}
                anchorEl={anchorEl}
                open={activeId == i}
                closePopover={() => setActiveId()}
              />
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}