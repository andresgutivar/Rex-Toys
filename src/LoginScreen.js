import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginScreen() {
  return (
    <div style={{ margin: "80px", border:"2px",padding:"20px",witdh:"100000px"  ,display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Form.Label htmlFor="inputEmail" srOnly >Email</Form.Label>
      <Form.Control
      className="emailinput"
        type="email"
        id="inputEmail"
        placeholder="Email"
        aria-describedby="emailHelpBlock"
        sm="4"
        style={{margin:"20px"}}
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
    </div>
  );
}








