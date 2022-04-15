// components
import Main from "./pages/Main";
import Register from "./pages/Register";
// images
import Facebook from "./images/Header/Websites/facebook.svg";
import Instagram from "./images/Header/Websites/Instagram.svg";
import PhoneCall from "./images/Header/Websites/phoneCall.svg";
import Telegram from "./images/Header/Websites/telegram.svg";
import Viber from "./images/Header/Websites/Viber.svg";
import WhatsUp from "./images/Header/Websites/WhatsUp.svg";
import Login from "./pages/Login";

export const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
];

export const menuData = [
  {
    title: "Главная",
    path: "main",
  },
  {
    title: "Игры",
    path: "games",
  },
  {
    title: "Статистика матчей",
    path: "forecasts",
  },
  {
    title: "Прогнозы/Оплата",
    path: "forecasts",
  },
  {
    title: "Отзывы",
    path: "reviews",
  },
  {
    title: "О нас",
    path: "aboutus",
  },
  {
    title: "Контакты",
    path: "contacts",
  },
];

export const ourWebSites = [
  {
    icon: PhoneCall,
    content: "+34 672 314 808",
    path: "tel:+37672314808",
  },
  {
    icon: Facebook,
    content: "Facebook",
    path: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/",
  },
  {
    icon: Telegram,
    content: "@footbet24com",
    path: "https://telegram.me/footbet24com",
  },
  {
    icon: WhatsUp,
    content: "+34 672 314 808",
    path: "https://api.whatsapp.com/send?phone=+34672314808",
  },
  {
    icon: Instagram,
    content: "Instagram",
    path: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link",
  },
  {
    icon: Viber,
    content: "+34 672 314 808",
    path: "viber://chat?number=+34672314808/",
  },
  {
    icon: "https://footbet24.com/_next/static/image/public/images/header/SocialMedia/email.9097dc6dc7eb815f27cdc84f5c008109.svg",
    content: "n.xach1987@mail.ru",
    path: "mailto:n.xach1987@mail.ru",
  },
];