// React
import React, { useState } from "react";
// MUI
import { Box } from "@mui/material";
// components
import ContentTitle from "../../helpers/ContentTitle";
import CommentsHeader from "./components/CommentsHeader";
import CommentsItems from "./components/CommentsItems";
import CommentsInput from "./components/CommentsInput";

export default function Comments({ path }) {
  const [activeSortOption, changeSortOption] = useState(0);
  const [rateWebSite, changeRating] = useState(0);

  return (
    <Box
      sx={(theme) => ({
        mr: "164px",
        ml: "164px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.between("sm", "lg")]: {
          ml: "48px",
          mr: "48px",
        },
        [theme.breakpoints.down("sm")]: {
          ml: "22px",
          mr: "22px",
        },
      })}
    >
      <ContentTitle title="Отзывы" />
      <CommentsHeader
        activeSortOption={activeSortOption}
        changeSortOption={changeSortOption}
      />
      <CommentsItems activeSortOption={activeSortOption} path={path} />
      <CommentsInput
        rateWebSite={rateWebSite}
        changeRating={changeRating}
      />
    </Box>
  );
}