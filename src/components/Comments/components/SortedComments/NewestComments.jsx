// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import CommentsItemHeader from "../CommentsItemsComponents/CommentsItemHeader";
import CommentsItemRating from "../CommentsItemsComponents/CommentsItemRating";
import CommentItemContent from "../CommentsItemsComponents/CommentItemContent";

export default function NewestComments({ DATA, path }) {
  return (
    <Box>
      {DATA.currentData().map((item, i) => {
        return (
          <Box
            sx={(theme) => ({
              mt: "30px",
              [theme.breakpoints.between("md", "lg")]: {
                mt: "20px",
              },
              [theme.breakpoints.down("md")]: {
                mt: "11px",
              },
            })}
            key={path ? "reviewsPageCommentsItem" + i : item.text + i}
          >
            <CommentsItemHeader item={item} />
            <CommentsItemRating item={item} />
            <CommentItemContent item={item} />
          </Box>
        );
      })}
    </Box>
  );
}