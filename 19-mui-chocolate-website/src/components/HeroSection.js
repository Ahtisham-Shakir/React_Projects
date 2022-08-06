import React from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import cake from "../images/cake.png";

function HeroSection() {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h3">A Bliss in every Byte</Typography>
          <Typography variant="h5">
            We offer tasty sweets and cakes for you!
          </Typography>
          <Button variant="contained" size="large" sx={{ borderRadius: 5 }}>
            Call Us
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          order={{ xs: 1, sm: 2 }}
        >
          <Box>
            <img src={cake} alt="cake" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;
