import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React from "react";

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

  return (
    <Card style={cardStyle}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Registrar producto</h2>
      </div>
      <Form>
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

        <Button
          variant="primary"
          type="submit"
          href="/"
          style={{ width: "100%" }}
        >
          Registrar pruducto
        </Button>
      </Form>
    </Card>
  );
}
