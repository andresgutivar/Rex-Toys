import { doc, setDoc } from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

export default function CardsItems(props) {
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
        </Card.Body>
      </Card>
    </>
  );
}
