// React
import React, { useState } from "react";
// components
import { Box, Modal, Stack, useMediaQuery } from "@mui/material";
import { ArrowBack, Close } from "@mui/icons-material";
import Main from "../subpages/Authorization/Main";
import ForgotPassword from "../subpages/Authorization/ForgotPassword";
import Authenticate from "../subpages/Authorization/Authenticate";
import CreateNewPassword from "../subpages/Authorization/CreateNewPassword";
import ActionSuccess from "../subpages/Authorization/ActionSuccess";

export default function Login({ toggleModal, closeModal }) {
  const maxMobile = useMediaQuery("(min-width : 500px)");
  const [activePage, changeActivePage] = useState(0);

  const page = [
    <Main maxMobile={maxMobile} changeActivePage={changeActivePage} closeModal={closeModal} />,
    <ForgotPassword changeActivePage={changeActivePage} maxMobile={maxMobile} />,
    <Authenticate changeActivePage={changeActivePage} />,
    <CreateNewPassword changeActivePage={changeActivePage} />,
    <ActionSuccess closeModal={closeModal} />
  ];

  const activeButton = [
    <Close
      onClick={() => {
        closeModal();
        changeActivePage(0)
      }}
      sx={{
        cursor: "pointer",
        mt: "15px",
        ml: "15px",
      }}
    />,
    <ArrowBack
      onClick={() => {
        changeActivePage(activePage - 1)
      }}
      sx={{
        cursor: "pointer",
        mt: "15px",
        ml: "15px"
      }}
    />
  ]

  return (
    <Modal open={toggleModal} onClose={() => {
      closeModal();
      changeActivePage(0)
    }}>
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
          minWidth: maxMobile ? "450px" : "auto",
          "& > form": {
            height: "100%",
          },
        }}
      >
        {activeButton[activePage >= 1 && activePage != page.length - 1 ? 1 : 0]}
        {page[activePage]}
      </Box>
    </Modal>
  );
}
