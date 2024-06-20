import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";
import { useLocation } from "react-router-dom";

const ItemScreen = () => {
  const location = useLocation();
  const { state } = location;
  // Ejemplo de datos del producto y opiniones

  const reviews = [
    { user: "Usuario 1", comment: "¡Excelente producto!" },
    { user: "Usuario 2", comment: "Muy satisfecho con la compra." },
    { user: "Usuario 3", comment: "No era lo que esperaba." },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "1200px",
          mb: 4,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "50%",
            height: "auto",
            maxHeight: 300,
            objectFit: "cover",
          }}
          src={state.image}
          alt={state.name}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            padding: 3,
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            {state.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {state.description}
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {state.precio}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-start", mt: 2 }}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
      <Paper
        sx={{
          width: "100%",
          maxWidth: "1200px",
          padding: 3,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Opiniones de usuarios
        </Typography>
        <List sx={{ maxHeight: "50vh", overflowY: "auto" }}>
          {reviews.map((review, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText primary={review.user} secondary={review.comment} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ItemScreen;
