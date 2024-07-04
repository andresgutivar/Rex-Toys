import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

//import { readDocumentByIdRealTime } from "./services/database";

export default function CardsItems(props) {
  const navigate = useNavigate();
  const [producto, setProducto] = useState();
  useEffect(() => {
    setProducto(props);
  }, [props]);

  function verProducto() {
    navigate("/Ver Producto", { state: producto });
  }

  return (
    <>
      {producto ? (
        <Card
          style={{
            width: "18rem",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ height: "200px", overflow: "hidden" }}>
            <Card.Img
              variant="top"
              src={producto.image}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <Card.Body
            style={{
              flex: "1 0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>{producto.description}</Card.Text>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Card.Text style={{ marginBottom: "10px" }}>
                {producto.price + "$"}
              </Card.Text>
              <Button variant="primary" onClick={() => verProducto()}>
                Ver producto
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
}
