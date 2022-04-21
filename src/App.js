// React
import { Box } from "@mui/material";
import React, { useState } from "react";
// routes
import { routes } from "./routes";
// Router DOM
import { Route, Routes, useLocation } from "react-router-dom";
// style
import "./style.css";
// components
import Header from "./components/ConstantComponents/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";

function App() {
  let location = useLocation();
  const validateLayout =
    location.pathname != "/login" && location.pathname != "/register";

  const [modalOpen, toggleModal] = useState(false);

  return (
    <Box className="app">
      {validateLayout && <Header toggleModal={toggleModal} />}
      <Routes>
        {routes.map((el, i) => {
          return (
            <Route
              path={el.path}
              key={"routePage" + i}
              element={
                <el.component modalOpen={modalOpen} toggleModal={toggleModal} />
              }
            />
          );
        })}
      </Routes>
      <Login
        toggleModal={modalOpen}
        closeModal={() => {
          toggleModal(false);
        }}
      />
      {validateLayout && <Footer />}
    </Box>
  );
}

export default App;