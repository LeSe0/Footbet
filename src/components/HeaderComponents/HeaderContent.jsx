// React
import React from "react";
// images
import Logo from "../../images/Header/logo.svg";
import headerBackground from "../../images/Header/headerBackground.svg";
import IpadHeaderIcon from "../../images/Header/IpadMenuIcon.svg"
// MUI
import { Typography, Grid, Box } from "@mui/material";
import UserLogin from "./components/UserLogin";

export default function HeaderContent() {
  return (
    <Grid
      item
      container
      sx={{
        backgroundImage: `url(${headerBackground})`,
        position: "relative",
        backgroundColor: "rgb(16, 16, 39)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
      }}
    >
      <Grid
        item
        sx={{
          mt: "2.4890190336749636vw",
          ml: "6.734992679355783vw",
          display: "flex",
          justifyContent: "flex-start",
          width: "min-content",
          flexDirection : "column"
        }}
      >
        <img
          src={Logo}
          style={{
            width: "12vw",
          }}
        />
        <Box sx = {theme =>({
          display : "flex",
          justifyContent : "center",
          mt : "13px",
          [theme.breakpoints.up("md")] : {
            display : "none"
          }
        })}>
          <img src = {IpadHeaderIcon}/>
        </Box>
      </Grid>
      <Grid
        container
        item
        sx={theme =>({
          display: "flex",
          justifyContent: "space-between",
          flexWrap : "nowrap",
          [theme.breakpoints.down('md')] : {
            flexWrap : "wrap",
          }
        })}
      >
        <Grid item sx = {theme =>({
          mt: "4.838945827232796vw",
          justifyContent : "center",
          display : "flex",
          width : "100%",
          [theme.breakpoints.down('md')] : {
            order : "1"
          }
        })}>
          <img
            src="https://footbet24.com/_next/static/image/public/images/header/footballer.fbc60a516e9e6f3e2de11bc453e05029.svg"
            width="90%"
          />
        </Grid>
        <Grid item sx = {theme =>({
          order : "1",
          justifyContent : "flex-end",
          width : "100%",
          alignItems : "flex-start",
          [theme.breakpoints.down("md")] : {
            order : "0",          
            width :"100%",
          }
        })}>
          <UserLogin />
        </Grid>
      </Grid>
    </Grid>
  );
}
