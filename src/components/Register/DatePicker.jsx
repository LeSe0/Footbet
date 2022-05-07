// React
import React from "react";
// components
import { DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Grid, Hidden, TextField, Typography } from "@mui/material";
import Calendar from "../../images/Register/Calendar.svg";

const datePickerInput = (props, text) => (
  <TextField
    {...props}
    fullWidth
    placeholder="Дата рождения"
    sx={theme => ({
      background: !text ? "rgba(255, 255, 255, 0.12)" : "rgba(158,9,74,.13)",
      borderRadius: "8px",
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

export default function DatePicker({ setDate, value, validateInputs }) {
  let text;

  if (validateInputs?.error?.details) {
    validateInputs?.error?.details.forEach(el => {
      text = el.context.key == "date" || value == undefined && "Incorrect date";
    });
  }

  return (
    <Grid container justifyContent={{ xs: "flex-start", sm: "center" }} alignItems="center">
      <Grid item mr="10px">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            "& img": {
              p: "5px",
              bgcolor: "#FFFFFB17",
              borderRadius: "100%",
              width: "35px",
              height: "35px",
              ml: "10px"
            }
          }}
        >
          <img src={Calendar} />
        </Grid>
      </Grid>
      <Grid
        item
        mt="20px"
        sx={{
          width: "80%",
          "& svg": {
            color: "#FFFFFF66"
          },
          "& input:placeholder": {
            color: "#FFFFFF66"
          }
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Hidden smDown>
            <DesktopDatePicker
              value={value ? value : ""}
              onChange={value => {
                setDate(value);
              }}
              renderInput={props => datePickerInput(props, text)}
              sx={{
                width: "100%",
                color: "#FFFFFF66"
              }}
            />
          </Hidden>
          <Hidden smUp>
            <MobileDatePicker
              value={value ? value : ""}
              onChange={value => {
                setDate(value);
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
            color: "#9F0B45",
            fontSize: "0.8rem"
          }}
          textAlign="left"
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
