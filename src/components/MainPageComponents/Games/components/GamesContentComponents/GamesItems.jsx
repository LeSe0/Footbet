// React
import React, { useState } from "react";
import { gamesData } from "../../../../../data/data";
import usePagination from "../../../../../helpers/usePagination";

// components
import {
  Box,
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import Commands from "./components/Commands";

export default function GamesItems() {
  const [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(gamesData.length / PER_PAGE);
  const DATA = usePagination(gamesData, PER_PAGE);

  const handleClick = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "12px",
      }}
    >
      {DATA.currentData().map((el, i) => {
        return (
          <Grid
            container
            key={el.title + i + el.score + el.startTime}
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: "#2A405A33",
                height: "34px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={(theme) => ({
                  fontFamily: "Arsenal",
                  fontSize: "19px",
                  fontWeight: "400",
                  letterSpacing: "0.07em",
                  color: "#fff",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "13px",
                  },
                  [theme.breakpoints.between("sm", "md")]: {
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.07em",
                  },
                })}
              >
                {el.league}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={(theme) => ({
                  color: el.started == "начался" ? "#fff" : "#FFFFFF4F",
                  display: "flex",
                  flexWrap: "wrap",
                  "& p": {
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Arsenal",
                    [theme.breakpoints.down("md")]: {
                      fontFamily: "Segoe UI",
                      fontSize: "10px",
                      fontWeight: 400,
                    },
                  },
                })}
              >
                <Typography
                  sx={{
                    mr: "11px",
                  }}
                >
                  {el.startTime}
                </Typography>
                <Typography>{el.started}</Typography>
              </Box>
              <Commands
                homeComand={el.homeComand}
                homeIcon={el.homeComandIcon}
                score={el.score}
                guestComand={el.guestComand}
                guestIcon={el.guestComandIcon}
                started={el.started}
              />
              <Box
                sx={theme => ({
                  width: "79px",
                  height: "27px",
                  background: el.started == "начался" ? "#FFFFFF33" : "none",
                  border: el.started != "начался" && "1px solid white",
                  color: "white",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "0.5s",
                  cursor: "pointer",
                  mr: el.started != "начался" && "3px",
                  fontSize: '14px',
                  "&:hover": {
                    background:
                      el.started == "начался" ? "#FFFFFF33" : "#A10B45",
                    border: el.started != "начался" && "none",
                  },
                  [theme.breakpoints.between("md", "lg")]: {
                    fontSize: '14px',
                    width: "79px"
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: '12px',
                    width: "53px",
                  }
                })}
              >
                Купить
              </Box>
            </Grid>
          </Grid>
        );
      })}
      <Divider sx={{
        background: '#2A405A33',
        height: "34px",
        width: "100%"
      }} />
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
            '&:hover': {
              background: "#FFFFFF33",
            }
          },
          "& .Mui-selected": {
            background: "#9E094A !important",
            "&:hover": {
              background: "#9E094A !important",
            },
          },
        }}
      />
    </Box>
  );
}
