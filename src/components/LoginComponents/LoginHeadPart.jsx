// React
import React, { memo } from "react";
import { loginHeaderData } from "../../data/data.js";

// components
import { Grid, Link } from "@mui/material";

const LoginHeadPart = memo(() => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
        mt: { xs: "0", md: "40px" },
        width: "100%",
        height: "min-content",
      }}
    >
      {loginHeaderData.map((el, i) => {
        return (
          <Grid
            item
            key={el.icon + el.path + i}
            sx={{
              p: "10px",
              borderRadius: "100%",
              bgcolor: "rgba(255, 255, 251, 0.09)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Link
              href={el.path}
              sx={(theme) => ({
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                "& img": {
                  width: "35px",
                  height: "35px",
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "20px",
                    height: "20px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "30px",
                    height: "30px",
                  },
                },
              })}
            >
              <img src={el.icon} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
})

export default LoginHeadPart
