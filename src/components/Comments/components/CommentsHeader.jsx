// React
import React from "react";
// MUI
import { Box, Typography } from "@mui/material";

export default function CommentsHeader({ activeSortOption, changeSortOption }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Typography
        sx={(theme) => ({
          color: "white",
          fontSize: "22px",
          [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "16px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
        })}
      >
        Сортировать:
      </Typography>
      <Box
        sx={{
          display: "flex",
          ml: "3vw",
        }}
      >
        <Box
          sx={theme =>({
            color: activeSortOption == 0 ? "#B00A47" : "white",
            mr: "20px",
            pr: "20px",
            borderRight: "1px solid #960B42",
            [theme.breakpoints.between("sm" , "lg")] : {
                mr : "14px",
                pr : "14px"
            },
            [theme.breakpoints.down("sm")] : {
                mr : "10px",
                pr : "10px"
            }
          })} 
        >
          <Typography
            sx={(theme) => ({
              cursor: "pointer",
              fontSize: "22px",
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            })}
            onClick={() => {
              changeSortOption(0);
            }}
          >
            по дате
          </Typography>
        </Box>
        <Typography
          sx={theme =>({
            color: activeSortOption == 1 ? "#B00A47" : "white",
            cursor: "pointer",
            fontSize: "22px",
            [theme.breakpoints.between("sm", "lg")]: {
              fontSize: "16px",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "10px",
            },
          })}
          onClick={() => {
            changeSortOption(1);
          }}
        >
          по оценке
        </Typography>
      </Box>
    </Box>
  );
}
