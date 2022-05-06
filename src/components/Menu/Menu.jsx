// React
import React, { useEffect, useState } from "react";
import { menuData } from "../../routes";
// MUI
import { Grid, Hidden } from "@mui/material";
import ElemsRows from "./components/ElemsRows";
import WebSitesForMobile from "../HeaderComponents/headerWebSitesComponents/mobile/WebSitesForMobile";
import { useLocation } from "react-router-dom";

export default function Menu() {

  const location = useLocation()

  const [activeId, setActiveId] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    location.pathname == "/register" && setActiveId(undefined)
  }, [location.pathname])

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
            activeId={activeId}
            setActiveId={setActiveId}
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