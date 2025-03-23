import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ListProps {
  text: string;
  icon: ReactNode;
}

const SidebarList: React.FC<ListProps> = ({ text, icon }) => {
  return (
    <Button
      startIcon={icon}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#ffffff",
        textTransform: "none",
        px: 2,
        py: 1.5,
        fontSize: "16px",
      }}
    >
      <Typography variant="h6" sx={{ display: { sm: "none", md: "flex" } }}>
        {text}
      </Typography>
    </Button>
  );
};

export default SidebarList;
