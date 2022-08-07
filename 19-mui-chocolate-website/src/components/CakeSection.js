import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function CakeSection() {
  const cakes = [
    {
      name: "Special Cake",
      image:
        "https://images.unsplash.com/photo-1548184934-0e21703c9a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
    {
      name: "Honey Cake",
      image:
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",
    },
    {
      name: "Chocolate Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
    },
    {
      name: "Wedding Cake",
      image:
        "https://images.unsplash.com/photo-1547736809-6d7227d324d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Strawberry Cake",
      image:
        "https://images.unsplash.com/photo-1579356094148-9b74dab60f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Lava Cake",
      image:
        "https://images.unsplash.com/photo-1616951851345-5290af91bfdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" mt={6} mb={6}>
        Cakes -
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ flexWrap: "wrap" }}
      >
        {cakes.map((cake) => (
          <Card sx={{ maxWidth: "300px", mb: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={cake.image}
              alt="cake"
            />
            <CardContent>
              <Typography variant="h5">{cake.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default CakeSection;
