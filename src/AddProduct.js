import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el archivo (subirlo a un servidor, etc.)
    console.log(selectedImage);
  };

  return (
    <Card style={cardStyle}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Registrar producto</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa Nombre"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese descripcion"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Precio" style={inputStyle} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Sube una imagen</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} style={inputStyle} />
        </Form.Group>
        {preview && (
          <div className="image-preview" style={{ marginBottom: "20px", textAlign: "center" }}>
            <Image src={preview} thumbnail style={{ maxHeight: '200px' }} />
          </div>
        )}
        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
        >
          Registrar producto
        </Button>
      </Form>
    </Card>
  );
}
