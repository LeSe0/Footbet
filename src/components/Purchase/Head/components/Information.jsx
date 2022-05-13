// React
import React from "react";
// Components
import { Stack, Typography } from "@mui/material";

export default function Information() {
  return (
    <Stack ml = {{xs : "10px" , sm : "70px"}} mb = "40px" mt = "20px" sx = {{
        "& span , p" : {
            letterSpacing : "0.19em",
            fontSize : {xs : "12px" , sm : "14px" , md : "16px" , lg : "18px"}
        }
    }}>
      <Typography>Коэффициент: 2.07</Typography>
      <Typography>Дата / Время начала события: 14.01/23:00</Typography>
    </Stack>
  );
}
