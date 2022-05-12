// React
import React, { useState } from "react";
import { comments } from "../../../data/data";
import usePagination from "../../../helpers/usePagination";
// MUI
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
// components
import NewestComments from "./SortedComments/NewestComments";
import MostRatedComments from "./SortedComments/MostRatedComments";

export default function CommentsItems({ activeSortOption, path }) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(comments.length / PER_PAGE);
  const DATA = usePagination(
    activeSortOption == 0
      ? comments
      : comments.sort((elem1, elem2) =>
        elem1.rateValue > elem2.rateValue ? -1 : 1
      ),
    PER_PAGE
  );

  const handleClick = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  const renderComments = [
    <NewestComments DATA={DATA} path={path} />,
    <MostRatedComments DATA={DATA} path={path} />,
  ];

  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      {renderComments[activeSortOption]}
      <Pagination
        count={count}
        size="large"
        page={page}
        renderItem={(item) => {
          item.page = "   ";
          return (
            <PaginationItem
              components={{ previous: ArrowBack, next: ArrowForward }}
              {...item}
              variant="text"
            />
          );
        }}
        shape="rounded"
        onChange={handleClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: "25px",
          pt: "12px",
          "& .css-yx0nvq-MuiButtonBase-root-MuiPaginationItem-root": {
            background: "white",
            borderRadius: "100%",
            width: "4px",
            padding: "0px",
            height: "4px",
            minWidth: "0px",
          },
          "& .MuiPaginationItem-previousNext": {
            background: "#FFFFFF33",
            color: "#9E094A",
            borderRadius: "8px",
            width: "20px",
            padding: "0px",
            height: "20px",
            minWidth: "0px",
            "&:hover": {
              background: "#FFFFFF33",
            },
          },
          "& .Mui-selected": {
            background: "#9E094A !important",
            "&:hover": {
              background: "#9E094A !important",
            },
          },
        }}
      />
    </Stack>
  );
}