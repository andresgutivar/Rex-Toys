import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function LoginScreen(props) {

  const cardStyle = {
    backgroundColor: '#75F175',
    width: '400px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    marginBottom: '20px'
  };

  return (
    <Card style={cardStyle}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Inicio de Sesión</h2>
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            style={inputStyle}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Iniciar Sesión
        </Button>
      </Form>
    </Card>
  );
}
