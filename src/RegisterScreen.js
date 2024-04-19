import React from "react"
import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Email</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
          
     <br></br>


      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>


    </>      
  );
}


export default function LoginScreen() {
  return (
    <div>
      <FormTextExample />
    </div>
  );
}
