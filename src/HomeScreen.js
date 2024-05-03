//import { doc, setDoc } from "firebase/firestore"; No tocar

import { Button } from "react-bootstrap";
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import Navbar from "./components/NavBarComponent";
import React from "react";
import gimnasio from "../src/imagenes/Gimnasio Piano Actividades Luz Sonido Bebe.webp";
import setbebe from "../src/imagenes/Set De Bebe Aprender A Comer Solo.webp";

//import { v4 as uuidv4 } from "uuid"; No tocar

export default function HomeScreen({ db }) {
  // function addItem() {
  //   const uuid = uuidv4();
  //   console.log("llegaste");
  //   setDoc(doc(db, "Productos", uuid), {
  //     nombre: "holas",
  //   });
  // }
  //No tocar esta parte, luego la usare para insertar datos a la base de datos.
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <ContainerHomeComponent style={{ marginTop: "10px" }}>
        <CardsItems
          name={"Set Aprende a Comer Bebé Bimbi"}
          description={"Set De Bebe Aprender A Comer Solo"}
          precio={"$ 175.999"}
          image={setbebe}
        />
        <CardsItems
          name={"Gimnasio Piano para Bebé elDuendeAzul"}
          description={"Gimnasio Piano Actividades Luz Sonido Bebe"}
          precio={"$ 200.000"}
          image={gimnasio}
        />
        <CardsItems
          name={"Set Aprende a Comer Bebé Bimbi"}
          description={"Set De Bebe Aprender A Comer Solo"}
          precio={"$ 175.999"}
          image={setbebe}
        />
        <CardsItems
          name={"Gimnasio Piano para Bebé elDuendeAzul"}
          description={"Gimnasio Piano Actividades Luz Sonido Bebe"}
          precio={"$ 200.000"}
          image={gimnasio}
        />
        <Button href="/Comprar" variant="success" type="submit">
          Agregar producto
        </Button>
      </ContainerHomeComponent>
    </div>
  );
}
