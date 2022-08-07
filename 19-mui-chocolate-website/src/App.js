import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import CakeSection from "./components/CakeSection";
import Contact from "./components/Contact";

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
      <CakeSection />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
