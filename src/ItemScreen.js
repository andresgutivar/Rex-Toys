import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContainerComponent from "./components/ContainerHomeComponent";
import Image from "react-bootstrap/Image";
import React from "react";
import Row from "react-bootstrap/Row";
import { View } from "react";
import { useLocation } from "react-router-dom";

export default function ItemScreen() {
  const location = useLocation();
  const { state } = location;

  return (
    <Container style={{ flex: 1 }}>
      <Col>
        <Row
          style={{
            width: 1250,
            alignItems: "flex-start",
          }}
        >
          <Col
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 400, width: 610 }}
              src={state.image}
              rounded
            />
          </Col>
          <Col style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>{state.name}</Card.Title>
                <Card.Text>{state.description}</Card.Text>
                <Card.Text>{state.precio}</Card.Text>
                <Button> Agregar a tu carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>el producto es muy bueno</Card.Title>
            <Card.Text>- fiorella chauran</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Button>Calificar producto</Button>
      </Col>
    </Container>
  );
}
