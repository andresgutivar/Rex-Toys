import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="inputEmail" srOnly>Email</Form.Label>
      <Form.Control
        type="email"
        id="inputEmail"
        placeholder="Email"
        aria-describedby="emailHelpBlock"
        sm="4"
      />
      <Form.Text id="emailHelpBlock" muted>
        Your email must be a valid email address.
      </Form.Text>
      
      <br />
      
      <Form.Label htmlFor="inputPassword" srOnly>Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword"
        placeholder="Password"
        aria-describedby="passwordHelpBlock"
        sm="4"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </Form.Text>
      
      <br />
      
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </>      
  );
}

export default function LoginScreen() {
  return (
    <div style={{ margin: "10px" ,display: "flex", flexDirection: "column", alignItems: "center" }}>
      <FormTextExample />
    </div>
  );
}
