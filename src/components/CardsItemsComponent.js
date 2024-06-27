import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function CardsItems(props) {
  const navigate = useNavigate();
  function verProducto() {
    navigate("/Ver Producto", { state: props });
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div style={{ height: "200px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={props.image}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.precio}</Card.Text>
          <Button variant="primary" onClick={() => verProducto()}>
            Ver producto
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
