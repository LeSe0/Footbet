// React
import React from "react";
// MUI
import { Modal, Box, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalWebSiteItems from "./components/modalWebSiteItems";

const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function WebSitesForMobile({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={styles.modal}
    >
      <Stack
        sx={{
          color: "#fff",
          width: "15.46875vw",
          minWidth: "300px",
          border: "1px solid #d10a52",
          background: "#12112c",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display : "flex",
            justifyContent: "flex-end",
            backgroundColor: "#d10a52",
          }}
        >
          <CloseIcon onClick = {onClose} sx = {{
            cursor : "pointer"
          }}/>
        </Box>
          <ModalWebSiteItems />
      </Stack>
    </Modal>
  );
}