// React
import React, { memo } from "react";

// images
import FooterLogo from "../../images/Footer/FooterLogo.svg";

// components
import FooterNavigation from "./components/FooterNavigation";
import FooterWebSites from "./components/FooterWebSites";
import FooterCards from "./components/FooterCards";
import { Box, Grid, Stack } from "@mui/material";

const Footer = memo(() => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width : "100%",
        right : "0"
      }}
    >
      <Box
        sx={{
          background: "#FFFFFF17",
          height: "auto",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            "& img": {
              width: { xs: "50%", sm: "80%" }
            }
          }}
        >
          <img src={FooterLogo} />
        </Box>
        <Stack
          sx={theme => ({
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: "auto",
              pr: "20px"
            },
            [theme.breakpoints.between("md", "lg")]: {
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              width: "100%"
            }
          })}
        >
          <FooterNavigation />
          <Grid
            container
            sx={{
              flexDirection: { xs: "column", md: "row" },
              ml: "7%",
              mr: "2%",
              width: { xs: "70%", md: "40%" },
              alignItems: "flex-end"
            }}
          >
            <Grid item>
              <FooterWebSites />
            </Grid>
            <Grid item>
              <FooterCards />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
});

export default Footer;
