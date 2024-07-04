import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

export default function NavBarComponent() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      fixed="top"
      bg="primary"
      data-bs-theme="dark"
      style={{ borderBottom: "10px solid #6DC36D", padding: "10px" }}
    >
      <Container fluid>
        <Navbar.Brand>Rex Toys</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            {" "}
            {/*Barra de Busqueda*/}
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button> {/*Botón Buscar*/}
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ marginLeft: "470px" }} href="/Carrito">
              Tu carrito
            </Nav.Link>
            <Nav.Link href="#action2">Ayudanos</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bebes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Juegos de Construccion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Juegos de Salon
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Juegos de Oficio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">Peluches</NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Muñecos y Muñecas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Iniciar sesion">Inicia Sesión</Nav.Link>
            <Nav.Link href="/Registrarse">Registrate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
