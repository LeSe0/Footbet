// React
import React from 'react'
import ChangeIcon from "../../../../images/Cabinet/ChangeIcon.svg"
// components
import { Grid, Typography } from '@mui/material'

export default function InformationItems({ content, icon }) {
    return (
        <Grid container justifyContent="space-between" flexWrap = "nowrap" sx={{
            "& p , span": {
                fontSize: { xs: "10px", md: "12px", lg: "15px" },
                color: "white"
            }
        }}>
            <Grid item>
                <Grid container justifyContent="space-between" alignItems="center" flexWrap = "nowrap" sx={{
                    "& img": {
                        p: "5px",
                        bgcolor: "#FFFFFB17",
                        borderRadius: "100%",
                        width: { xs: "25px", sm: "35px" },
                        height: { xs: "25px", sm: "35px" },
                        mr: "10px"
                    }
                }}>
                    <img src={icon} />
                    <Typography>{content}</Typography>
                </Grid>
            </Grid>
            <Grid item sx={{
                "& img": {
                    width: { xs: "25px", sm: "35px" },
                    height: { xs: "25px", sm: "35px" }
                }
            }}>
                <img src={ChangeIcon} />
            </Grid>
        </Grid>
    )
}
