// React
import React, { useState } from "react";
// images
import Telephone from "../../../images/Header/Websites/phoneCall.svg";
import Facebook from "../../../images/Header/Websites/facebook.svg";
import Instagram from "../../../images/Header/Websites/Instagram.svg";
import Telegram from "../../../images/Header/Websites/telegram.svg";
import Viber from "../../../images/Header/Websites/Viber.svg";
import WhatsUp from "../../../images/Header/Websites/WhatsUp.svg";
// MUI
import { Grid, Box, Popover, Fade, Paper, Typography } from "@mui/material";
import WebSitePopover from "./WebSitePopover";

const websites = [
  {
    icon: Telephone,
    content: "+34 672 314 808",
  },
  {
    icon: Facebook,
    content: "+34 672 314 808",
  },
  {
    icon: Telegram,
    content: "+34 672 314 808",
  },
  {
    icon: WhatsUp,
    content: "+34 672 314 808",
  },
  {
    icon: Instagram,
    content: "+34 672 314 808",
  },
  {
    icon: Viber,
    content: "+34 672 314 808",
  },
];

export default function HeaderWebSites() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState();

  const handleClick = (id) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(() => (id == activeId ? !open : true));
    setActiveId(id);
  };

  return (
    <Grid
      item
      container
      sx={(theme) => ({
        width: "min-content",
        color: "#fff",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      })}
    >
      <Box
        sx={{
          height: "314px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {websites.map((el, i) => {
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
                open={open}
                closePopover={() => setOpen(false)}
              />
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}
