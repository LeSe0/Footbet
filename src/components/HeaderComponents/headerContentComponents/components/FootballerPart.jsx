// React
import React from "react";
import { useLocation } from "react-router-dom";
// components
import { Grid } from "@mui/material";
import UserLogin from "../../components/userLoginComponents/UserLogin";

export default function FootballerPart({ toggleModal }) {

  const location = useLocation();

  return (
    <Grid
      container
      item
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        [theme.breakpoints.down("md")]: {
          flexWrap: "wrap",
        },
      })}
    >
      {location.pathname == "/" &&
        <Grid
          item
          sx={(theme) => ({
            mt: "4.838945827232796vw",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            [theme.breakpoints.down("md")]: {
              order: "1",
            },
          })}
        >
          <img
            src="https://footbet24.com/_next/static/image/public/images/header/footballer.fbc60a516e9e6f3e2de11bc453e05029.svg"
            width="90%"
          />
        </Grid>
      }
      <Grid item width="100%">
        <Grid container sx={(theme) => ({
          order: "1",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          alignItems: location.pathname == "/" ? "flex-start" : "center",
          [theme.breakpoints.down("md")]: {
            order: "0",
          },
        })}>
          <Grid item>
            <UserLogin toggleModal={toggleModal} />
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}