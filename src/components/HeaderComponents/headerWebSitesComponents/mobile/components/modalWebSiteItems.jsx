// React
import React from "react";
import { ourWebSites } from "../../../../../routes";
// MUI
import { Grid, Box } from "@mui/material";

export default function ModalWebSiteItems() {
  return (
    <Box>
      {ourWebSites.map((el, i) => {
        return (
          <Grid
            key={el.content + i}
            container
            sx={{
              width: "100%",
              minHeight: "40px",
              display: "grid",
              gridTemplateColumns: "1fr 5fr",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#161124",
                borderBottom: "1px solid #d10a52",
                padding: "2px",
              }}
            >
              <img src={el.icon} />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& a": {
                  textDecoration: "none",
                  color: "#fff",
                },
              }}
            >
              <a href={el.path}>{el.content}</a>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
