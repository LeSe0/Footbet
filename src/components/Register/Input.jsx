// React
import React from "react";
// components
import { Grid, TextField, Typography } from "@mui/material";

export default function Input({ type, setNewValue, icon, placeholder, validateInputs, value }) {
  let text = "";
  if (validateInputs?.error?.details) {
    for (let i = 0; i < validateInputs.error.details?.length; i++) {
      let error = validateInputs.error.details[i].context.key;
      if (error == "login" && type == "text") {
        text = "Incorrect login";
      } else if (error == "password" && type == "password") {
        text = "Incorrect password";
      } else if (error == "email" && type == "email") {
        text = "Incorrect email";
      } else if (error == "tel" && type == "tel") {
        text = "Incorrect telephone number";
      }
    }
  }

  return (
    <Grid container alignItems="center" justifyContent={{ xs: "flex-start", sm: "center" }}>
      <Grid
        item
        sx={{
          mr: "10px"
        }}
      >
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
          <img src={icon} />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "80%"
        }}
      >
        <TextField
          value={value ? value : ""}
          sx={theme => ({
            width: "100%",
            mt: "20px",
            "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
              border: "none",
              padding: "0",
              outline: "none"
            },
            "& fieldset": {
              border: "none"
            },
            "& input": {
              background: validateInputs?.error && text.length > 0 ? "rgba(158,9,74,.13)" : "rgba(255, 255, 255, 0.12)",
              border: "1px solid" + validateInputs?.error && text.length > 0 ? "#9e094a21" : "#F7F7F7",
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
          type={type}
          placeholder={placeholder}
          onChange={e => {
            setNewValue(e.target.value);
          }}
          pattern={type == "tel" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : "false"}
        />
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
