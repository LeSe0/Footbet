// React
import React, { useState } from "react";
import { menuData } from "../../routes";
// MUI
import { Grid, Hidden, Modal } from "@mui/material";
import ElemsRows from "./components/ElemsRows";
import WebSitesForMobile from "../HeaderComponents/headerWebSitesComponents/mobile/WebSitesForMobile";

export default function Menu() {
  const [activeId, setActiveId] = useState(0);
  const [openModal , setOpenModal] = useState(false);

  return (
    <Hidden mdDown>
      <Grid
        container
        sx={{
          pt: "44.6px",
          fontSize : "16px",
          justifyContent : "center"
        }}
      >
        <Grid item>
          <ElemsRows
            menuData={menuData}
            activeId={activeId}
            setActiveId={setActiveId}
            setOpenModal = {setOpenModal}
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