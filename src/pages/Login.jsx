// React
import React, { useState } from "react";
import { Box, Modal, useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
// components
import Main from "../subpages/Authorization/Main";

export default function Login({ toggleModal, closeModal }) {
  const maxMobile = useMediaQuery("(min-width : 500px)");
  const [activePage, changeActivePage] = useState(0);

  const page = [
    <Main maxMobile={maxMobile} changeActivePage={changeActivePage} />,
  ];

  return (
    <Modal open={toggleModal} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: maxMobile ? { xs: "50%", md: "35%" } : "100%",
          height: maxMobile ? "min-content" : "100%",
          pb: "15px",
          bgcolor: "#12112C",
          color: "white",
          mb: { xs: "0", md: "61px" },
          borderRadius: "10px",
          "& form": {
            height: "100%",
          },
        }}
      >
        <Close
          onClick={closeModal}
          sx={{
            cursor: "pointer",
            mt: "15px",
            ml: "15px",
          }}
        />
        {page[activePage]}
      </Box>
    </Modal>
  );
}