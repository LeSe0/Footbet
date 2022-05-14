// React
import React from "react";
// components
import { DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Grid, Hidden, TextField, Typography } from "@mui/material";

const datePickerInput = (props, text) => (
  <TextField
    {...props}
    fullWidth
    placeholder="Дата рождения"
    sx={theme => ({
      background: !text ? "rgba(255, 255, 255, 0.12)" : "rgba(158,9,74,.13)",
      borderRadius: "8px",
      border : "1px solid white",
      maxWidth : "300px",
      "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
        border: "none",
        padding: "0",
        outline: "none"
      },
      "& fieldset": {
        border: "none"
      },
      "& input": {
        border: "1px solid" + !text ? "#F7F7F7" : "#9e094a21",
        color: "#FFFFFF66",
        fontFamily: "Arsenal",
        fontWeight: "400px !important",
        fontSize: "18px",
        overflow: "auto !important",
        width: "100%",
        height: "2.7%",
        [theme.breakpoints.down("sm")]: {
          fontSize: "16px",
          pl: "10px"
        },
        [theme.breakpoints.between("sm", "lg")]: {
          fontSize: "16px",
          pl: "14px"
        },
        "&:placeholder": {
          pl: "47px"
        }
      }
    })}
  />
);

export default function CardValidDate({ cardValidDate, setValidDate, validateInputs }) {
  let text = "";

  for (let i = 0; i < validateInputs?.error?.details?.length; i++) {
    if (validateInputs?.error?.details[i].context.key == "cardValidDate") {
      text = "wrong card valid date";
    }
  }

  return (
    <Box
      sx={{
        my : "20px",
        "& svg": {
          fill: "white",
        }
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Hidden smDown>
          <DesktopDatePicker
            value={cardValidDate ? cardValidDate : ""}
            onChange={value => {
              setValidDate(value);
            }}
            renderInput={props => datePickerInput(props, text)}
            sx={{
              width: "100%",
              color: "#FFFFFF66",
            }}
          />
        </Hidden>
        <Hidden smUp>
          <MobileDatePicker
            value={cardValidDate ? cardValidDate : ""}
            onChange={value => {
              setValidDate(value);
            }}
            renderInput={props => datePickerInput(props, text)}
            sx={{
              width: "100%",
              color: "#FFFFFF66"
            }}
          />
        </Hidden>
      </LocalizationProvider>
      <Typography
        sx={{
          height: "20px",
          width: "80%",
          color: "#9F0B45",
          fontSize: "0.8rem",
          width: "80%",
          color: "#9F0B45 !important",
          fontSize: "0.8rem"
        }}
        textAlign="left"
      >
        {text}
      </Typography>
    </Box>
  );
}
