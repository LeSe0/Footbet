// React
import React from "react";
// MUI
import { Grid, Hidden } from "@mui/material";
// components
import HeaderContent from "../HeaderComponents/headerContentComponents/HeaderContent";
import HeaderWebSites from "../HeaderComponents/headerWebSitesComponents/HeaderWebSites";
// images
import Facebook from "../../images/Header/Websites/facebook.svg"
import Instagram from "../../images/Header/Websites/Instagram.svg"
import PhoneCall from "../../images/Header/Websites/phoneCall.svg"
import Telegram from "../../images/Header/Websites/telegram.svg"
import Viber from "../../images/Header/Websites/Viber.svg"
import WhatsUp from "../../images/Header/Websites/WhatsUp.svg"

const data = [
  {
      icon : PhoneCall,
      content : "+34 672 314 808",
      path : "tel:+37672314808"
  },
  {
      icon : Facebook,
      content : "Facebook",
      path : "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
  },
  {
      icon : Telegram,
      content : "@footbet24com",
      path : 'https://telegram.me/footbet24com'
  },
  {
      icon : WhatsUp,
      content : "+34 672 314 808",
      path : 'https://api.whatsapp.com/send?phone=+34672314808'
  },
  {
      icon : Instagram,
      content : "Instagram",
      path : "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
  },
  {
      icon : Viber,
      content : "+34 672 314 808",
      path : "viber://chat?number=+34672314808/"
  },
  {
      icon : 'https://footbet24.com/_next/static/image/public/images/header/SocialMedia/email.9097dc6dc7eb815f27cdc84f5c008109.svg',
      content : "n.xach1987@mail.ru",
      path : "mailto:n.xach1987@mail.ru"
  }
]

export default function Header() {
  return (
    <Grid
      container
      sx={{
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        backgroundColor : "#12112c",
        height : "100%"
      }}
    >
      <Hidden mdDown>
        <Grid item>
          <HeaderWebSites webSitesData = {data}/>
        </Grid>
      </Hidden>
      <HeaderContent webSitesData = {data}/>
    </Grid>
  );
}