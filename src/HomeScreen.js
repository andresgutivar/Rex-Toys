import { doc, setDoc } from "firebase/firestore";

import { Button } from "react-bootstrap";
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import Navbar from "./components/NavBarComponent";
import React from "react";
import gimnasio from "../src/imagenes/Gimnasio Piano Actividades Luz Sonido Bebe.webp";
import setbebe from "../src/imagenes/Set De Bebe Aprender A Comer Solo.webp";
import { v4 as uuidv4 } from "uuid";

export default function HomeScreen({ db }) {
  function addItem() {
    const uuid = uuidv4();
    console.log("llegaste");
    setDoc(doc(db, "Productos", uuid), {
      nombre: "holas",
    });
  }

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <ContainerHomeComponent style={{ marginTop: '10px' }}>
        <CardsItems name={"Set Aprende a Comer Bebé Bimbi"} description={"Set De Bebe Aprender A Comer Solo"} precio={"$ 175.999"} image={setbebe} />
        <CardsItems name={"Gimnasio Piano para Bebé elDuendeAzul"} description={"Gimnasio Piano Actividades Luz Sonido Bebe"} precio={"$ 200.000"} image={gimnasio} />
        <CardsItems name={"Sonajeros bebe elDuendeAzul"} description={"Sonajeros x4 para bebes, crece, descubre y aprende jugando"} precio={"$ 150.650"} image={sonajeros} />
        <CardsItems name={"Hipotótamo Didáctico LittleLearner"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
        <CardsItems name={"Titeres Dedos bebé Bañera"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
        <CardsItems name={"Titeres Dedos bebé Bañera"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
        <CardsItems name={"Titeres Dedos bebé Bañera"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
        <CardsItems name={"Titeres Dedos bebé Bañera"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
        <CardsItems name={"Titeres Dedos bebé Bañera"} description={"Hipotótamo Didáctico (bilingüe) Aprende a Cantar con Sonido"} precio={"$ 385.999"} image={hipo} />
 
      </ContainerHomeComponent>
      <Button onClick={() => addItem()} variant="success" type="submit">
        Agregar producto
      </Button>
    </div>
  );
}
