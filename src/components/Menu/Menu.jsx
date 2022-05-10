// React
import React, { useEffect, useState } from "react";
import { menuData } from "../../routes";
// MUI
import { Grid, Hidden } from "@mui/material";
import ElemsRows from "./components/ElemsRows";
import WebSitesForMobile from "../HeaderComponents/headerWebSitesComponents/mobile/WebSitesForMobile";

export default function Menu() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Hidden mdDown>
      <Grid
        container
        sx={{
          pt: "44.6px",
          fontSize: "16px",
          justifyContent: "center"
        }}
      >
        <Grid item>
          <ElemsRows
            menuData={menuData}
            setOpenModal={setOpenModal}
          />
        </Grid>
      </Grid>
      <WebSitesForMobile
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Hidden>
  );
}