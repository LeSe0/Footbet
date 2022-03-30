// React
import React, { useState } from "react";
// MUI
import { Select, Grid, Box, MenuItem, FormControl } from "@mui/material";

export default function LanguageSelect() {
  const data = [
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/rus.6eb4cb14c6727094ffbdc706f51360a0.png",
      lang: "Рус.",
      langEng: "Русский",
    },
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/arm.154b418dcfe3730b9fe242bbe330318c.svg",
      lang: "Հայ.",
      langEng: "Հայերեն",
    },
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/en.5ef8551354aeda065b6468777658445c.svg",
      lang: "Eng.",
      langEng: "English",
    },
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/esp.d5ee19c07e52a898d7b35b3b61324448.svg",
      lang: "Esp",
      langEng: "Español",
    },
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/frc.e6b803f62cf2894a8b524dee4b797c14.svg",
      lang: "Frc.",
      langEng: "Français",
    },
    {
      icon: "https://footbet24.com/_next/static/image/public/images/header/flags/deu.bea6bf40b758041e842bd905d17ed039.svg",
      lang: "Deu.",
      langEng: "Deutsche",
    },
  ];

  const [activeLanguage, selectActiveLanguage] = useState(0);

  return (
    <FormControl
      fullWidth
      sx={{
        color: "#fff",
        ml: "20.35px",
        mr: "7.320644216691069vw",
        width : "min-content",
        "& .MuiSelect-select": {
          display: "flex !important",
          padding: "0 !important",
        },
      }}
    >
      <Select
        sx={{
          border: "none !important",
          display: "flex",
          width: "auto",
          color: "#fff",
          "& fieldset": {
            border: "none !important",
          },
        }}
        MenuProps={{
          sx: {
            "& ul": {
              background: "#12112C !important",
              border: "1px solid #9e094a !important",
              outline : "none !important",
              color : "white"
            },
          },
        }}
        value={activeLanguage}
        onChange={(e) => {
          selectActiveLanguage(e.target.value);
        }}
        IconComponent={null}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
        renderValue={(val, i) => {
          return (
            <Box
              sx={theme =>({
                display: "flex",
                fontSize: "18px",
                [theme.breakpoints.down("md")] : {
                  fontSize : "16px"
                }
              })}
              key = {val + i}
            >
              <Box
                sx={{
                  mr: "2px",
                }}
              >
                {data[val].lang}
              </Box>
              <Box
                sx={{
                  "& img": {
                    borderRadius: "100%",
                  },
                }}
              >
                <img src={data[val].icon} />
              </Box>
            </Box>
          );
        }}
      >
        {data.map((el, i) => {
          return (
            <MenuItem
              value={i}
              sx={{
                display: "flex",
                fontSize: "18px",
              }}
              key = {el.langEng + i}
            >
              <Box
                sx={{
                  mr: "2px",
                }}
              >
                {el.langEng}
              </Box>
              <Box
                sx={{
                  "& img": {
                    borderRadius: "100%",
                  },
                }}
              >
                <img src={el.icon} />
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
