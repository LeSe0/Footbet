// React
import React from "react";
// components
import { Button, Grid } from "@mui/material";

export default function RegisterButton({ title }) {
  return (
    <Grid container alignItems="center" justifyContent="center">
        <Button
          type="submit"
          sx={{
            backgroundColor: "#9F0B45",
            color: "white",
            fontSize: { xs: "13px", md: "16px", lg: "20px" },
            textTransform: "none",
            borderRadius: "8px",
            mt: "40px",
            width: { sm: "50%", md: "18%" },
            "&:hover": {
              backgroundColor: "#9F0B45"
            }
          }}
        >
          {title}
        </Button>
    </Grid>
  );
}
