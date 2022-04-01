// React
import React from "react";
// MUI
import { Paper, Popover, Typography } from "@mui/material";

export default function WebSitePopover({ el, open, anchorEl, closePopover }) {
  return (
    <Popover
      open={open}
      onClose={closePopover}
      anchorEl={anchorEl}
      placement={"right"}
      transition={"true"}
      sx={{
        background: "rgba(0,0,0,0.1)",
        "& .css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
          background: "transparent",
        },
      }}
    >
      <Paper
        sx={{
          backgroundColor: "rgba(21,17,37,0.9)",
          borderRadius: "0",
          border: "none !important",
          color: "#fff",
          boxShadow: "none",
          height: "4vh",
          width: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            background: "transparent",
            fontSize: "12px !important",
            fontWeight: "400 !important",
            '& a' : {
              textDecoration : "none",
              color : '#fff'
            }
          }}
        >
          <a href={el.path}>{el.content}</a>
        </Typography>
      </Paper>
    </Popover>
  );
}