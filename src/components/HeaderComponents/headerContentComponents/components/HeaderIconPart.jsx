// React
import React from "react";
// images
import Logo from "../../../../images/Header/logo.svg";
import IpadHeaderIcon from "../../../../images/Header/IpadMenuIcon.svg"
// MUI
import { Box, Grid } from "@mui/material";

export default function HeaderIconPart() {
  return (
    <Grid
      item
      sx={{
        mt: "2.4890190336749636vw",
        ml: "6.734992679355783vw",
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
          justifyContent: "center",
          mt: "13px",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
      >
        <img src={IpadHeaderIcon} />
      </Box>
    </Grid>
  );
}
