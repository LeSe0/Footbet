// React
import React from "react";
import BigBall from "../images/Cabinet/BigBallIcon.svg"
// Components
import { Box, Grid, Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
// import StatisticTable from "../components/Statistic/StatisticTable";
import ContentTitle from "../helpers/ContentTitle";
import Information from "../components/Cabinet/Information/Information";

export default function Cabinet() {
    return (
        <Stack mb="250px">
            <Menu />
            <ContentTitle title="Личный кабинет" />
            <Grid container flexDirection={{ xs: "column", sm: "row" }} justifyContent="center" alignItems="center">
                <Information />
                {/* <StatisticTable /> */}
                a
            </Grid>
            <Box sx={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "-2"
            }}>
                <img src={BigBall} />
            </Box>
        </Stack>
    );
}
