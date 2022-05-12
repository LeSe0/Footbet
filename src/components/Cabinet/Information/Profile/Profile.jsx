// React
import React from 'react'
import ProfileImage from "../../../../images/Cabinet/ProfileImage.svg"
// components
import { Box, IconButton } from '@mui/material'
import { CameraAlt } from '@mui/icons-material'

export default function Profile() {
    return (
        <Box sx={{
            position: "relative",
            "& img": {
                width: { xs: "200px", md: "350px" }
            }
        }}>
            <img src={ProfileImage} />
            <IconButton sx={{
                position: "absolute",
                bottom: { xs: "10px", sm: "25px" },
                left: "45%",
                bgcolor: "#FFFFFB40",
                '& .MuiSvgIcon-root': {
                    fill: "#9E094A"
                },
                "&:hover": {
                    bgcolor: "#FFFFFB40",
                }
            }}>
                <CameraAlt />
            </IconButton>
        </Box>
    )
}
