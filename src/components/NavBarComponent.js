import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Tu carrito</Nav.Link>
            <Nav.Link href="#action2">Ayudanos</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bebes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Juegos de Construccion</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Juegos de Salon</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Juegos de Oficio</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Peluches</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Muñecos y Muñecas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
