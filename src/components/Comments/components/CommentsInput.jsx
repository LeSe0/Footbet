// React
import React from "react";
// MUI
import { Box, Rating, Stack, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function CommentsInput({ rateWebSite, changeRating }) {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <Rating
        precision={1}
        value={rateWebSite}
        onChange={(e) => {
          changeRating(parseInt(e.target.value));
        }}
        sx={(theme) => ({
          width: "min-content",
          "& svg": {
            width: "28px",
            height: "28px",
            [theme.breakpoints.between("md", "lg")]: {
              width: "21px",
              height: "21px",
            },
            [theme.breakpoints.down("md")]: {
              width: "15px",
              height: "15px",
            },
          },
        })}
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        sx={(theme) => ({
          width: "100%",
          "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
            border: "none",
            padding: "0",
            outline: "none",
          },
          "& fieldset": {
            border: "none",
          },
          "& textarea": {
            height: "180px !important",
            border: "1px solid #FFFFFF33",
            background: "rgba(255,255,255,0.11)",
            color: "#FFFFFF66",
            fontFamily: "Arsenal",
            fontWeight: "400px !important",
            fontSize: "18px",
            overflow: "auto !important",
            borderRadius: "23px",
            pl: "47px",
            pt: "25px",
            [theme.breakpoints.down("md")]: {
              height: "81px !important",
              fontSize: "9px",
              pl: "10px",
              pt: "10px",
              borderRadius: "10px",
            },
            [theme.breakpoints.between("md", "lg")]: {
              height: "116px !important",
              fontSize: "16px",
              pl: "14px",
              pt: "25px",
              borderRadius: "23px",
            },
          },
        })}
        multiline
        placeholder="Оставить отзыв..."
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: "20px",
          mb: "200px",
          [theme.breakpoints.between("md", "lg")]: {
            mt: "20px",
            mb: "200px",
          },
          [theme.breakpoints.down("md")]: {
            mt: "10px",
            mb: "84px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "182px",
            height: "52px",
            opacity: "0.25",
            fontFamily: "Arimo",
            fontWeight: "400",
            letterSpacing: "0.1em",
            color: "white",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            cursor: "pointer",
            [theme.breakpoints.down("md")]: {
              width: "64px",
              height: "20px",
              fontSize: "10px",
              borderRadius: "4px",
            },
            [theme.breakpoints.between("md", "lg")]: {
              width: "64px",
              height: "20px",
              fontSize: "10px",
              borderRadius: "8px",
            },
          })}
          onClick={() => {
            !location.search.length > 0 && navigate("login");
          }}
        >
          Отправить
        </Box>
      </Box>
    </Stack>
  );
}