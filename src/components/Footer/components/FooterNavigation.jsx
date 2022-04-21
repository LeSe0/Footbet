// React
import React, { memo } from "react";
import { footerRouteData } from "../../../data/data";
import { HashLink } from "react-router-hash-link";

// components
import { Box, Stack, Typography } from "@mui/material";

const FooterNavigation = memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        zIndex: "2",
        height: "min-content",
        justifyContent: "center",
        width: "100%"
      }}
    >
      {footerRouteData.map((el, i) => {
        return (
          <Stack
            key={"elemFooterLinkContainer" + i}
            sx={(theme) => ({
              borderRight: i == 1 && "2px solid #7E1A4A",
              borderLeft: i == 1 && "2px solid #7E1A4A",
              pl: i == 1 && "29px",
              pr: i == 1 && "29px",
              mr: i == 1 && "29px",
              ml: i == 1 && "29px",
              [theme.breakpoints.down("md")]: {
                pl: i == 1 && "26px",
                pr: i == 1 && "26px",
                mr: i == 1 && "26px",
                ml: i == 1 && "26px",
              },
              [theme.breakpoints.between("md", "lg")]: {
                pl: i == 1 && "9px",
                pr: i == 1 && "9px",
                mr: i == 1 && "9px",
                ml: i == 1 && "9px",
              },
            })}
          >
            {el.map((elem, index) => {
              return (
                <Typography
                  key={elem.title + elem.path + index}
                  sx={(theme) => ({
                    "& a": {
                      textDecoration: "none",
                      fontFaimly: "Arimo",
                      fontWeight: "400",
                      color: "white",
                      fontSize: "15px",
                      [theme.breakpoints.between("md", "lg")]: {
                        fontSize: "13px",
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "10px",
                      },
                    },
                  })}
                >
                  <HashLink to={`${elem.path}#${elem.hashLink}`}>
                    {elem.title}
                  </HashLink>
                </Typography>
              );
            })}
          </Stack>
        );
      })}
    </Box>
  );
})

export default FooterNavigation
