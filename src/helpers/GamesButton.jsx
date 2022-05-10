// React
import React from "react";
// components
import { Grid, Typography, Box } from "@mui/material";

export default function GamesButton({ el, id, activeId, setActiveId }) {
  return (
    <Grid
      item
      sx={(theme) => ({
        background:
          activeId == id
            ? "linear-gradient(80.04deg, #D10A52 1.6%, rgba(5, 5, 11, 0) 106.17%)"
            : "linear-gradient(80.04deg, #040749 1.6%, rgba(44, 44, 44, 0) 106.17%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "10vw",
        minHeight: "5vh",
        fontSize: "14px",
        width: "10vw",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        margin: "0 22.5px",
        [theme.breakpoints.down("1050")]: {
          mb: "1%",
          maxWidth: "150px",
          minHeight: "51px",
          ml : '0',
        },
        [theme.breakpoints.down("1400")]: {
          mb: "1%",
          maxWidth: "138px",
          minHeight: "51px",
        },
      })}
      onClick={() => {
        el.path != "contacts" && setActiveId(id);
      }}
    >
      <Box
        sx={{
          height: "5vh",
          display: "flex",
          alignItems: "center",
          borderLeft: `2px solid ${activeId == id ? "#12112C" : "#D10A52"}`,
          width : "90%",
          justifyContent : "center"
        }}
      >
        <Typography sx = {{
            ml : "5px"
        }}>{el.title}</Typography>
      </Box>
    </Grid>
  );
}