// React
import React from "react";
// components
import { Stack } from "@mui/material";
import Menu from "../components/Menu/Menu";
import Comments from "../components/Comments/Comments";

export default function Reviews() {
    return (
        <Stack alignItems="center" mb="100px">
            <Menu />
            <Comments path="reviews" />
        </Stack>
    );
}
