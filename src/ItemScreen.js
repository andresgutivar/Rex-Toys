import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  readDocumentByIdRealTime,
  updateDocumentById,
} from "./services/database";

import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";

const ItemScreen = ({ db }) => {
  const location = useLocation();
  const { state } = location;
  const [producto, setProducto] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [newOpinion, setNewOpinion] = useState("");

  useEffect(() => {
    if (state?.id) {
      const unsubscribe = readDocumentByIdRealTime(
        "Productos",
        state.id,
        setProducto
      );
      return () => unsubscribe();
    }
  }, [state]);

  const addOpinion = async () => {
    if (newOpinion.trim() !== "") {
      try {
        await updateDocumentById("Productos", state.id, {
          opinions: [...(producto.opinions || []), newOpinion],
        });
        setNewOpinion("");
        setShowInput(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      {producto ? (
        <>
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
              src={producto.image || null}
              alt={producto.name || null}
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
                {producto.name || null}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {producto.description || null}
              </Typography>
              <Typography
                variant="body1"
                component="text.secondary"
                gutterBottom
              >
                {"Telf. " + producto.contact || null}
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                {producto.price + " $" || null}
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
              {producto.opinions && producto.opinions.length > 0 ? (
                producto.opinions.map((review, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemText
                      primary={"Usuario incognito"}
                      secondary={review}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body1" component="text.secondary">
                  No hay opiniones aún.
                </Typography>
              )}
            </List>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => setShowInput(!showInput)}
            >
              Opinar
            </Button>
            {showInput && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mt: 2,
                  alignItems: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  label="Escribe tu opinión"
                  value={newOpinion}
                  onChange={(e) => setNewOpinion(e.target.value)}
                  fullWidth
                />
                <IconButton color="primary" onClick={addOpinion} sx={{ ml: 2 }}>
                  <SendIcon />
                </IconButton>
              </Box>
            )}
          </Paper>
        </>
      ) : (
        <Typography variant="h6" component="div" gutterBottom>
          Cargando producto...
        </Typography>
      )}
    </Box>
  );
};

export default ItemScreen;
