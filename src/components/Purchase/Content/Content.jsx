// React
import React from "react";
// Components
import { Stack, Typography } from "@mui/material";
import PurchaseTypes from "./components/PurchaseTypes";

export default function Content() {
  return (
    <Stack bgcolor="rgba(255, 255, 255, 0.06)" alignItems="center" pb = "20px" mb = "20px">
      <Typography
        sx={{
          color: "#A70B47 !important",
          fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "26px" },
          fontWeight: "700"
        }}
      >
        2500 руб.
      </Typography>
      <Typography sx = {{
          textTransform : "uppercase",
          fontSize : {xs : "16px" , sm : "19px" , md : "21px" , lg : "24px"}
      }}>выбрать платежную систему</Typography>
      <PurchaseTypes />
    </Stack>
  );
}
