// React
import { Box } from "@mui/material";
import React from "react";
// routes
import { routes } from "./routes";
// Router DOM
import { Route, Routes } from "react-router-dom";
// style
import "./style.css";
// components
import Header from "./components/ConstantComponents/Header";

function App() {



  return (
    <Box className="app">
      <Header />
      <Routes>
        {routes.map((el, i) => {
          return (
            <Route
              path={el.path}
              key = {'routePage' + i}
              element={
                <el.component/>
              }
            />
          );
        })}
      </Routes>
    </Box>
  );
}

export default App;
