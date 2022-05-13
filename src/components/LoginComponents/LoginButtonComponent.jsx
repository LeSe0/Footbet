// React
import React, { memo } from "react";

//components
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginButtonComponent = memo(({ title, validateInputs, closeModal }) => {
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
          backgroundColor: "#9F0B45"
        },
        "& a": {
          color: "white",
          width: "100%",
          height: "100%"
        }
      }}
    >
      <Link to={validateInputs.error ? "" : "/cabinet"} onClick={() => (validateInputs.error ? "" : closeModal())}>
        {title}
      </Link>
    </Button>
  );
});

export default LoginButtonComponent;
