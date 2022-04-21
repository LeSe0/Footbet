// React
import React from "react";
// MUI
import StarIcon from "@mui/icons-material/Star";
import { Hidden, Rating, Box } from "@mui/material";

export default function CommentsItemRating({ item }) {
  return (
    <Hidden mdDown>
      <Box
        sx={{
          mt: "3%",
        }}
      >
        <Rating
          value={item ? item.rateValue : 0}
          precision={1}
          emptyIcon={<StarIcon />}
          readOnly
          sx={{
            "& svg": {
              width: "25px !important",
              height: "25px !important",
            },
          }}
        />
      </Box>
    </Hidden>
  );
}