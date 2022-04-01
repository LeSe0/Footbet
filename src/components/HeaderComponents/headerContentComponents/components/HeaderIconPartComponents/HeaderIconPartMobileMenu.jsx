// React
import React, { useState } from "react";
// MUI
import { Menu, MenuItem, Hidden } from "@mui/material";
// components
import WebSitesForMobile from "../../../headerWebSitesComponents/mobile/WebSitesForMobile";

const data = [
  {
    title: "Главная",
  },
  {
    title: "Игры",
  },
  {
    title: "Прогнозы/олата",
  },
  {
    title: "Статистика матчей",
  },
  {
    title: "Отзывы",
  },
  {
    title: "О нас",
  },
  {
    title: "Оплата",
  },
  {
    title: "Контакты",
    modal: true,
  },
];

export default function HeaderIconPartMobileMenu({
  anchorEl,
  open,
  setOpen,
  webSitesData,
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
        {data.map((el, i) => {
          return (
            <MenuItem
              dense={true}
              key={el.title + i}
              sx={{
                borderBottom: "1px solid rgba(126,26,74,.19)",
              }}
              onClick={(e) => {
                el.modal && setOpenModal(true);
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
        webSitesData={webSitesData}
      />
    </Hidden>
  );
}