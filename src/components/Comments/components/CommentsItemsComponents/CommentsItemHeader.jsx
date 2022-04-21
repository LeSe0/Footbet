// React
import React from "react";
// MUI
import { Grid, Hidden, Rating, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";

export default function CommentsItemHeader({ item }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item>
        <AccountCircleIcon
          sx={(theme) => ({
            color: "#F2F2F2",
            width: "75px",
            height: "75px",
            [theme.breakpoints.between("md", "lg")]: {
              width: "38px",
              height: "38px",
            },
            [theme.breakpoints.down("md")]: {
              width: "35px",
              height: "35px",
            },
          })}
        />
      </Grid>
      <Grid item>
        <Stack>
          <Typography
            sx={(theme) => ({
              fontFamily: "Arsenal",
              fontSize: "22px",
              fontWeight: 400,
              letterSpacing: "0.07em",
              ml: "10px",
              color: "white",
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "10px",
              },
            })}
          >
            UserName
          </Typography>
          <Hidden mdUp>
            <Rating
              value={item.rateValue}
              emptyIcon={<StarIcon />}
              readOnly
              sx={(theme) => ({
                ml: "10px",
                "& svg": {
                  width: "10px !important",
                  height: "10px !important",
                  [theme.breakpoints.up("md")]: {
                    width: "21px !important",
                    height: "21px !important",
                  },
                },
              })}
            />
          </Hidden>
        </Stack>
      </Grid>
    </Grid>
  );
}