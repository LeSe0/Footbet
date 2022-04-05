// React
import React, { useState } from "react";
// MUI
import { Box, Stack } from "@mui/material";
// components
import Lines from "../../../../helpers/Lines";
import NewsItemsModal from "./newsItemsModal/NewsItemsModal";

export default function NewsItems({ data }) {
  return (
    <Stack
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        height: "320px",
        [theme.breakpoints.down("500px")]: {
          minWidth: "120px",
          minHeight: "100px",
        },
        [theme.breakpoints.down("1024px")]: {
          minWidth: "200px",
          minHeight: "150px",
        },
      })}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Lines width="80%" up={true} />
        <Lines width="100%" up={true} />
      </Stack>
      <Box
        sx={(theme) => ({
          width: "86%",
          height: "88%",
          borderRadius: "8px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          backgroundImage: `url("${data.image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          cursor: "pointer",
          [theme.breakpoints.down("500")]: {
            minWidth: "152px !important",
            minHeight: "140px !important",
            width: "152px !important",
            height: "140px !important",
          },
          [theme.breakpoints.down("1024")]: {
            minWidth: "183px",
            minHeight: "159px",
            width: "183px",
            height: "159px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            background: "#00000099",
            color: "#fff",
            [theme.breakpoints.down("500")]: {
              fontSize: "10px",
            },
            [theme.breakpoints.down("1024")]: {
              fontSize: "13px",
              lineHeight: "17px",
            },
          })}
        >
          {data.title}
        </Box>
      </Box>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Lines width="100%" />
        <Lines width="80%" />
      </Stack>
    </Stack>
  );
}