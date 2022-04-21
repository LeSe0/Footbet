// React
import React, { memo } from "react";

// components
import { Typography } from "@mui/material";

const LoginTitleComponent = memo(({ title }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Arimo",
        fontWeight: "400",
        fontSize: { xs: "18px", md: "24px", lg: "30px" },
        pt: "10px",
      }}
    >
      {title}
    </Typography>
  );
})

export default LoginTitleComponent
