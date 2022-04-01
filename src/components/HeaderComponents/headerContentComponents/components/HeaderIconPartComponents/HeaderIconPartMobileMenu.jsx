// React
import React, { useState } from "react";
// MUI
import { Menu, MenuItem, Hidden } from "@mui/material";
import { menuData } from "../../../../../routes";
// components
import WebSitesForMobile from "../../../headerWebSitesComponents/mobile/WebSitesForMobile";

export default function HeaderIconPartMobileMenu({
  anchorEl,
  open,
  setOpen,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Hidden mdUp>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={(theme) => ({
          "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              ml: "-50px",
              p: "15px 45px 22px 13px",
              background: "#12112c",
              border: "1px solid #7e1a4a",
              color: "white",
              "& ul": {
                p: "0",
                "& li": {
                  p: "4.9px",
                },
              },
              [theme.breakpoints.down("sm")]: {
                p: "10px",
              },
            },
        })}
      >
        {menuData.map((el, i) => {
          return (
            <MenuItem
              dense={true}
              key={el.title + i}
              sx={{
                borderBottom: "1px solid rgba(126,26,74,.19)",
              }}
              onClick={() => {
                el.path == "contacts" && setOpenModal(true);
              }}
            >
              {el.title}
            </MenuItem>
          );
        })}
      </Menu>
      <WebSitesForMobile
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Hidden>
  );
}