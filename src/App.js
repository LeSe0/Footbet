// React
import React from "react";
import { routes } from "./routes";
import { Route, Routes, useLocation } from "react-router-dom";
// style
import "./style.css";
// components
import Header from "./components/ConstantComponents/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";

function App() {
  let location = useLocation();
  const validateLayoutHeader = location.pathname != "/login";
  const validateLayoutFooter = location.pathname != "/login" && location.pathname != "/register";

  return (
    <Box className="app">
      {validateLayoutHeader && <Header />}
      <Routes>
        {routes.map((el, i) => {
          return <Route path={el.path} key={"routePage" + i} element={<el.component />} />;
        })}
      </Routes>
      {validateLayoutFooter && <Footer />}
    </Box>
  );
}

export default App;
