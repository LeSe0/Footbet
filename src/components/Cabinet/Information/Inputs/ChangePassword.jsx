// React
import React from 'react'
import ChangeIcon from "../../../../images/Cabinet/ChangeIcon.svg"
// components
import { Grid, Typography } from '@mui/material'

export default function ChangePassword({ content, icon }) {
    return (
        <Grid container justifyContent="space-between" sx={{
            "& p , span": {
                fontSize: { xs: "8px", md: "10px", lg: "13px" },
                color: "rgba(255, 255, 255, 0.4)"
            }
        }}>
            <Grid item width="70%">
                <Grid container justifyContent="space-between" alignItems="center" sx={{
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
                    <Typography component="span" sx={{
                        width: "70%",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
                    }}>{content}</Typography>
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
