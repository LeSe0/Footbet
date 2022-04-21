// React
import React, { memo } from "react";

// components
import { Box, Stack } from "@mui/material";
import Lines from "../../../../helpers/Lines";

const NewsItems = memo(({ data, toggleModal, index }) => {
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
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Lines width="80%" up />
        <Lines width="100%" up />
      </Stack>
      <Box
        onClick={() => {
          toggleModal(index);
          window.scroll(0, 0);
        }}
        onDrag={(e) => {
          e.preventDefault()
        }}
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
        className="test"
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
})

export default NewsItems
