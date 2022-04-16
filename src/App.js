// React
import { Box } from "@mui/material";
import React from "react";
// routes
import { routes } from "./routes";
// Router DOM
import { Route, Routes, useLocation } from "react-router-dom";
// style
import "./style.css";
// components
import Header from "./components/ConstantComponents/Header";
import Footer from "./components/Footer/Footer";

function App() {
  let location = useLocation();
  const validateLayout = location.pathname != "/login" && location.pathname != "/register"

  return (
    <Box className="app">
      {validateLayout && <Header />}
      <Routes>
        {routes.map((el, i) => {
          return (
            <Route
              path={el.path}
              key={"routePage" + i}
              element={<el.component />}
            />
          );
        })}
      </Routes>
      {validateLayout && <Footer />}
    </Box>
  );
}

export default App;