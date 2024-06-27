import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { createDocument } from "./services/database";
import { useNavigate } from "react-router-dom";

export default function SurchaseScreen() {
  const cardStyle = {
    backgroundColor: "#75F175",
    width: "400px",
    margin: "auto",
    marginTop: "100px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    marginBottom: "20px",
  };

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contacto, setContacto] = useState("");
  const [precio, setPrecio] = useState("");
  const [imageBase64, setImageBase64] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const data = {
        name: nombre,
        description: descripcion,
        contact: contacto,
        price: precio,
        image: imageBase64,
      };
      await createDocument("Productos", data, () => {
        alert("Producto agregado");
        navigate("/");
      });
    } catch (error) {
      console.error("Error al agregar producto:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card style={cardStyle}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Registrar producto</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa Nombre"
            style={inputStyle}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese descripcion"
            style={inputStyle}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContacto">
          <Form.Label>Contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="N° de telefono de contacto"
            style={inputStyle}
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            style={inputStyle}
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Sube una imagen</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={inputStyle}
            required
          />
        </Form.Group>
        {preview && (
          <div
            className="image-preview"
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            <Image src={preview} thumbnail style={{ maxHeight: "200px" }} />
          </div>
        )}
        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Registrar producto"}
        </Button>
      </Form>
    </Card>
  );
}
