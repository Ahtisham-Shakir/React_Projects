import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroSection />
    </ThemeProvider>
  );
}

export default App;
