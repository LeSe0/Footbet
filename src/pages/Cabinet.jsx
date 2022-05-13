// React
import React from "react";
import BigBall from "../images/Cabinet/BigBallIcon.svg";
// Components
import { Box, Grid, Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
import ContentTitle from "../helpers/ContentTitle";
import Information from "../components/Cabinet/Information/Information";
import CabinetTable from "../components/Cabinet/Table/CabinetTable";

export default function Cabinet() {
  return (
    <Stack mb="250px">
      <Menu />
      <ContentTitle title="Личный кабинет" />
      <Grid
        container
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        alignItems="center"
        mx={{ xs: "0%", md: "5%" }}
      >
        <Information />
        <CabinetTable />
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-2"
        }}
      >
        <img src={BigBall} />
      </Box>
    </Stack>
  );
}
