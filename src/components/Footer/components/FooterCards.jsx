// React
import React, { memo } from "react";

// images
import Visa from "../../../images/Footer/Visa.svg";
import MasterCard from "../../../images/Footer/MasterCard.svg";
import Paypal from "../../../images/Footer/Paypal.svg";

// components
import { Grid, Stack, Typography } from "@mui/material";

const FooterCards = memo(() => {
  return (
    <Stack sx={{
      alignItems: "center",
      width: "100%",
    }}>
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "8px", md: "13px", lg: "15px" },
        }}
      >
        Платежные системы
      </Typography>
      <Grid container sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "min-content",
        flexWrap: "nowrap",
        '& img': {
          width: "7vw",
          height: "2vh"
        }
      }}>
        <Grid item>
          <img src={Paypal} />
        </Grid>
        <Grid
          item
          sx={{
            borderLeft: "1px solid #D10A52",
          }}
        >
          <img src={Visa} />
        </Grid>
        <Grid
          item
          sx={{
            borderLeft: "1px solid #D10A52",
            height: "min-content"
          }}
        >
          <img src={MasterCard} />
        </Grid>
      </Grid>
    </Stack>
  );
})

export default FooterCards
