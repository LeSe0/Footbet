// React
import React from "react";
import { useLocation } from "react-router-dom";
// components
import { Grid, Typography, Box } from "@mui/material";

export default function Button({ el, setOpenModal }) {

  const location = useLocation();

  return (
    <Grid
      item
      sx={theme => ({
        background:
          el.path == location.pathname
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
        transition: "all .2s ease-in-out",
        margin: "0 22.5px",
        fontFamily: "Arimo",
        "&:hover": {
          background: "linear-gradient(80.04deg, #D10A52 1.6%, rgba(5, 5, 11, 0) 106.17%) !important",
          "& div": {
            borderLeft: "2px solid #12112C"
          }
        },
        [theme.breakpoints.down("1070")]: {
          mb: "1%",
          maxWidth: "150px",
          minHeight: "51px",
          ml: "0"
        },
        [theme.breakpoints.down("1400")]: {
          mb: "1%",
          maxWidth: "138px",
          minHeight: "51px"
        }
      })}
    >
      <Box
        sx={{
          height: "5vh",
          display: "flex",
          alignItems: "center",
          borderLeft: `2px solid ${el.path == location.pathname ? "#12112C" : "#D10A52"}`,
          width: "90%",
          justifyContent: "center",
        }}
        onClick={() => {
          !el.path && setOpenModal(true)
        }}
      >
        <Typography
          sx={{
            ml: "5px",
            fontFamily: "Arimo",
            cursor: "pointer"
          }}
        >
          {el.title}
        </Typography>
      </Box>
    </Grid>
  );
}
