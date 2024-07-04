import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteDocumentById, readTableRealTime } from "./services/database";

import DeleteIcon from "@mui/icons-material/Delete";

const CarritoScreen = () => {
  // Ejemplo de productos en el carrito
  const carrito = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 150 },
    { id: 3, nombre: "Producto 3", precio: 200 },
  ];
  const [productos, setProductos] = useState([]);
  async function DeleteProduct(id) {
    console.log("llegaste con :", id);
    try {
      await deleteDocumentById("carrito", id);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const unsubscribe = readTableRealTime("carrito", setProductos);
    return () => {
      unsubscribe();
    };
  }, []);
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
      <Paper
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: 3,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Carrito de Compras
        </Typography>
        {carrito.length > 0 ? (
          <List sx={{ width: "100%", mb: 2 }}>
            {productos.map((item) => (
              <ListItem key={item.id} disableGutters>
                <ListItemText
                  primary={item.name}
                  secondary={item.price + "$"}
                />
                <IconButton
                  color="error"
                  sx={{ ml: 1 }}
                  onClick={() => {
                    DeleteProduct(item.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" component="div" align="center">
            No hay productos en el carrito.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={() => {}}
        >
          Comprar Carrito
        </Button>
      </Paper>
    </Box>
  );
};

export default CarritoScreen;
