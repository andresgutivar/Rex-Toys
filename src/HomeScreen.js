import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import CardsItems from "./components/CardsItemsComponent";
import Container from "react-bootstrap/Container";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import Navbar from "./components/NavBarComponent";
import { readTableRealTime } from "./services/database";

export default function HomeScreen({ db }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const unsubscribe = readTableRealTime("Productos", setProductos);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <ContainerHomeComponent
        style={{ marginTop: "10px", textAlign: "center" }}
      >
        {productos.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No se ha registrado ningún producto.
          </p>
        ) : (
          productos.map((producto, index) => (
            <CardsItems
              key={index}
              name={producto.name}
              description={producto.description}
              price={producto.price + "$"}
              image={producto.image}
              id={producto.id}
              opinions={producto.opinions}
              // Aquí asumimos que producto.image contiene la URL en formato Base64
            />
          ))
        )}
      </ContainerHomeComponent>
      <Button
        variant="primary"
        type="submit"
        href="/Agregar Producto"
        style={{ width: "100%", marginTop: "20px" }}
      >
        Agregar producto
      </Button>
    </div>
  );
}
