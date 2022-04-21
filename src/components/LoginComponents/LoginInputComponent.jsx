// React
import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

export default function LoginInputComponent({
  placeholder,
  changeLogin,
  changePassword,
  login,
  password,
  validateInputs,
  type,
}) {
  let text = "";
  if (validateInputs?.error?.details) {
    if (validateInputs?.error?.details) {
      for (let i = 0; i < validateInputs.error.details?.length; i++) {
        if (
          type == "email" &&
          validateInputs.error.details[i].context.key == type
        ) {
          text = "Incorrect email";
        } else if (
          type == "password" &&
          validateInputs.error.details[i].context.key == type
        ) {
          text = "Incorrect password";
        }
      }
    }

    return (
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center !important",
          alignItems: "center",
        }}
      >
        <TextField
          InputLabelProps={{
            shrink: "true",
          }}
          onChange={(e) => {
            changeLogin
              ? changeLogin(e.target.value)
              : changePassword(e.target.value);
          }}
          value={login ? login : password}
          type={placeholder == "Пароль" ? "password" : "text"}
          sx={(theme) => ({
            width: "80%",
            mt: placeholder == "Пароль" ? "4%" : "7%",
            "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
              border: "none",
              padding: "0",
              outline: "none",
            },
            "& fieldset": {
              border: "none",
            },
            "& input": {
              background: validateInputs?.error
                ? "rgba(158,9,74,.13)"
                : "rgba(255, 255, 255, 0.12)",
              border:
                "1px solid" + validateInputs?.error ? "#9e094a21" : "#F7F7F7",
              color: "#FFFFFF66",
              fontFamily: "Arsenal",
              fontWeight: "400px !important",
              fontSize: "18px",
              overflow: "auto !important",
              borderRadius: "8px",
              width: "100%",
              height: "2.7%",
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
                pl: "10px",
              },
              [theme.breakpoints.between("sm", "lg")]: {
                fontSize: "16px",
                pl: "14px",
              },
              "&:placeholder": {
                pl: "47px",
              },
            },
          })}
          placeholder={placeholder}
        />
        <Typography
          sx={{
            height: "20px",
            width: "80%",
            color: "#9F0B45",
            fontSize: "0.8rem",
            width: "80%",
            color: "#9F0B45",
            fontSize: "0.8rem",
          }}
          textAlign="left"
        >
          {text}
        </Typography>
      </Grid>
    );
  }
}