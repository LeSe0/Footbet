// React
import React from "react";
import SuccessIcon from "../../../images/Purchase/SuccessIcon.svg";
// Components
import { Box, Grid, IconButton, Modal, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function DecisionModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          bgcolor="#12112C"
          sx={{
            position: "relative",
            width: { xs: "100vw", sm: "400px", md: "500px" },
            height: { xs: "100vh", sm: "600px" },
            "& span , p , svg": {
              color: "white",
              fill: "white"
            }
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              left: "10px",
              top: "10px"
            }}
          >
            <Close />
          </IconButton>
          <Stack alignItems="center" justifyContent="center">
            <Typography>Благодарим Вас!</Typography>
            <img src={SuccessIcon} />
          </Stack>
        </Grid>
      </Box>
    </Modal>
  );
}
