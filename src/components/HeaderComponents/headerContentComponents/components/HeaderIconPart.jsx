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
      sx={(theme) => ({
        mt: "2.5vw",
        ml: "6.8vw",
        display: "flex",
        justifyContent: "flex-start",
        width: "min-content",
        flexDirection: "column",
        "& .logo": {
          width: "221px",
          height: "221px",
          [theme.breakpoints.down("1400")]: {
            width: "120px",
            height: "120px",
          },
          [theme.breakpoints.down("md")]: {
            width: "90px",
            height: "90px",
          },
          [theme.breakpoints.down("sm")]: {
            width: "62px",
            height: "90px",
          },
        },
      })}
    >
      <img src={Logo} className="logo" />
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
        <Box
          onClick={handleClick}
          sx={(theme) => ({
            cursor: "pointer",
            "& img": {
              width: "26px",
              height: "16px",
              [theme.breakpoints.down("sm")]: {
                width: "17px",
                height: "12px",
              },
            },
          })}
        >
          <img src={IpadHeaderIcon} width="15vw" />
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
