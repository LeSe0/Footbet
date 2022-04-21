// React
import React, { memo } from "react";

// components
import { Grid, Hidden } from "@mui/material";
import HeaderContent from "../HeaderComponents/headerContentComponents/HeaderContent";
import HeaderWebSites from "../HeaderComponents/headerWebSitesComponents/HeaderWebSites";

const Header = memo(({ toggleModal }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "hidden",
        backgroundColor: "#12112c",
        height: "100%",
      }}
    >
      <Hidden mdDown>
        <Grid item>
          <HeaderWebSites />
        </Grid>
      </Hidden>
      <HeaderContent toggleModal={toggleModal} />
    </Grid>
  );
})


export default Header
