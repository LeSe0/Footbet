// React
import React from "react";
// Components
import { Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
import StatisticTable from "../components/Statistic/StatisticTable";
import ContentTitle from "../helpers/ContentTitle";

export default function Statistic() {
    return (
        <Stack mb="100px">
            <Menu />
            <ContentTitle title="Статистика" />
            <StatisticTable />
        </Stack>
    );
}
