import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function LoginScreen(props) {
  const cardStyle = {
    backgroundColor: '#F4F4F4',
    backgroundImage: 'linear-gradient(135deg, #7B68EE 10%, #00FA9A 100%)', // Fondo con degradado
    width: '400px',
    margin: 'auto',
    marginTop: '100px',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    border: '1px solid #ddd',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '32px',
    color: '#FFF', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', 
  };

  const inputStyle = {
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    padding: '12px',
    width: '100%',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '30px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '18px',
    textTransform: 'uppercase',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    padding: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  const lightStyle = {
    position: 'absolute',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
    animation: 'lightAnimation 2s infinite alternate',
  };

  const light1 = { ...lightStyle, top: '-10px', left: '-10px' };
  const light2 = { ...lightStyle, top: '-10px', right: '-10px' };
  const light3 = { ...lightStyle, bottom: '-10px', left: '-10px' };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para iniciar sesión
  };

  return (
    <Card style={cardStyle}>
      <div style={light1}></div>
      <div style={light2}></div>
      <div style={light3}></div>
      <div style={headerStyle}>
        Iniciar Sesión
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            style={inputStyle}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            style={inputStyle}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style = buttonHoverStyle}
          onMouseLeave={(e) => e.target.style = buttonStyle}
        >
          Iniciar Sesión
        </Button>
      </Form>
    </Card>
  );
}


