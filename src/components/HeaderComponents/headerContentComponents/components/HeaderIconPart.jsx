// React
import React, { useState } from "react";
// images
import Logo from "../../../../images/Header/logo.svg";
import IpadHeaderIcon from "../../../../images/Header/IpadMenuIcon.svg";
// MUI
import { Box, Grid } from "@mui/material";
// components
import HeaderIconPartMobileMenu from "./HeaderIconPartComponents/HeaderIconPartMobileMenu";

export default function HeaderIconPart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <Grid
      item
      sx={{
        mt: "2.5vw",
        ml: "6.8vw",
        display: "flex",
        justifyContent: "flex-start",
        width: "min-content",
        flexDirection: "column",
      }}
    >
      <img
        src={Logo}
        style={{
          width: "10vw",
        }}
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: "5px",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
      >
        <Box onClick={handleClick}>
          <img src={IpadHeaderIcon} width = "13vw"/>
        </Box>
        <HeaderIconPartMobileMenu
          anchorEl={anchorEl}
          open={open}
          setOpen={setOpen}
        />
      </Box>
    </Grid>
  );
}