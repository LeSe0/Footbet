// React
import React from "react";
import { Button } from "@mui/material";

export default function LoginButtonComponent({ title, path, validateInputs }) {
  return (
    <Button
      href={validateInputs ? "" : ""}
      type="submit"
      sx={{
        backgroundColor: "#9F0B45",
        color: "white",
        fontSize: { xs: "13px", md: "16px", lg: "20px" },
        textTransform: "none",
        borderRadius: "8px",
        mt: "40px",
        width: "80%",
        "&:hover": {
          backgroundColor: "#9F0B45",
        },
      }}
    >
      {title}
    </Button>
  );
}