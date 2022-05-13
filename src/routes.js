// components
import Main from "./pages/Main";
import Register from "./pages/Register";
import GamesPage from "./pages/Games";
import Statistic from "./pages/Statistic";
import Reviews from "./pages/Reviews";
// images
import Facebook from "./images/Header/Websites/facebook.svg";
import Instagram from "./images/Header/Websites/Instagram.svg";
import PhoneCall from "./images/Header/Websites/phoneCall.svg";
import Telegram from "./images/Header/Websites/telegram.svg";
import Viber from "./images/Header/Websites/Viber.svg";
import WhatsUp from "./images/Header/Websites/WhatsUp.svg";
import Login from "./pages/Login";
import Forecasts from "./pages/Forecasts";
import AboutUs from "./pages/AboutUs";
import Cabinet from "./pages/Cabinet";
import BuyForecast from "./pages/BuyForecast";

export const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/games",
    component: GamesPage
  },
  {
    path: "/statistic",
    component: Statistic
  },
  {
    path: "/forecasts",
    component: Forecasts
  },
  {
    path: "/reviews",
    component: Reviews
  },
  {
    path: "/aboutUs",
    component: AboutUs
  },
  {
    path: "/cabinet",
    component: Cabinet
  },
  {
    path : "/purchase",
    component : BuyForecast
  }
];

export const menuData = [
  {
    title: "Главная",
    path: "/"
  },
  {
    title: "Игры",
    path: "/games"
  },
  {
    title: "Статистика матчей",
    path: "/statistic"
  },
  {
    title: "Прогнозы/Оплата",
    path: "/forecasts"
  },
  {
    title: "Отзывы",
    path: "/reviews"
  },
  {
    title: "О нас",
    path: "/aboutus"
  },
  {
    title: "Контакты",
    path: false
  }
];

export const ourWebSites = [
  {
    icon: PhoneCall,
    content: "+34 672 314 808",
    path: "tel:+37672314808"
  },
  {
    icon: Facebook,
    content: "Facebook",
    path: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
  },
  {
    icon: Telegram,
    content: "@footbet24com",
    path: "https://telegram.me/footbet24com"
  },
  {
    icon: WhatsUp,
    content: "+34 672 314 808",
    path: "https://api.whatsapp.com/send?phone=+34672314808"
  },
  {
    icon: Instagram,
    content: "Instagram",
    path: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
  },
  {
    icon: Viber,
    content: "+34 672 314 808",
    path: "viber://chat?number=+34672314808/"
  },
  {
    icon: "https://footbet24.com/_next/static/image/public/images/header/SocialMedia/email.9097dc6dc7eb815f27cdc84f5c008109.svg",
    content: "n.xach1987@mail.ru",
    path: "mailto:n.xach1987@mail.ru"
  }
];
