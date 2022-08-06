import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Blissfull Bytes
        </Typography>
        <Button variant="text" color="inherit" startIcon={<LoginIcon />}>
          Login
        </Button>
        <Button variant="text" color="inherit" endIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
