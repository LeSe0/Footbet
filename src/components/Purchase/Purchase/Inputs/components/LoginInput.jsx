// React
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginInput({ fio, setFio, validateInputs }) {
  let text = "";

  for (let i = 0; i < validateInputs?.error?.details?.length; i++) {
    if (validateInputs?.error?.details[i].context.key == "fio") {
      text = "wrong fio";
    }
  }

  return (
    <Box>
      <TextField
        InputLabelProps={{
          shrink: "true"
        }}
        onChange={e => {
          setFio(e.target.value);
        }}
        value={fio ? fio : ""}
        type="text"
        sx={theme => ({
          width: "80%",
          "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
            border: "none",
            padding: "0",
            outline: "none"
          },
          "& fieldset": {
            border: "none"
          },
          "& input": {
            background: validateInputs?.error ? "rgba(158,9,74,.13)" : "rgba(255, 255, 255, 0.12)",
            border: "1px solid white",
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
        placeholder="имя, фамилия"
      />
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
