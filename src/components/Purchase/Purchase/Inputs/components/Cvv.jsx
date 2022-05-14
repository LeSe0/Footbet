// React
import React from "react";
// Components
import { Box, TextField, Typography } from "@mui/material";

const onlyNumbers = e => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export default function CvvInput({ cvv, setCvv, validateInputs }) {
  let text = "";

  for (let i = 0; i < validateInputs?.error?.details?.length; i++) {
    if (validateInputs?.error?.details[i].context.key == "cvv") {
      text = "wrong CVV code";
    }
  }

  return (
    <Box>
      <TextField
        InputLabelProps={{
          shrink: "true"
        }}
        onChange={e => {
          onlyNumbers(e);
          setCvv(e.target.value);
        }}
        value={cvv ? cvv : ""}
        type="text"
        sx={{
          width: "30%",
          mt : "15px",
          "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
            border: "none",
            padding: "0",
            outline: "none"
          },
          "& fieldset": {
            border: "none"
          },
          "& input": {
            background: text.length > 0 ? "rgba(158,9,74,.13)" : "rgba(255, 255, 255, 0.12)",
            border: "1px solid white",
            color: "#FFFFFF66",
            fontFamily: "Arsenal",
            fontWeight: "400px !important",
            fontSize: "17px",
            overflow: "auto !important",
            borderRadius: "8px",
            width: "100%",
            height: "2.7%",
            pl : {xs : "10px" , sm : "14px" , lg : "0"},
            textAlign : "center"
          }
        }}
        inputProps={{
          maxLength: 3
        }}
        placeholder="код CVV"
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
