import React from "react";
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import setbebe from "../src/imagenes/Set De Bebe Aprender A Comer Solo.webp";
import gimnasio from "../src/imagenes/Gimnasio Piano Actividades Luz Sonido Bebe.webp";
import Navbar from "./components/NavBarComponent";

export default function HomeScreen() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Navbar />
      <ContainerHomeComponent style={{ marginTop: '10px' }}>
        <CardsItems name={"Set de bebe"} description={"Set De Bebe Aprender A Comer Solo"} precio={"200.000$"} image={setbebe} />
        <CardsItems name={"Gimnasio"} description={"Gimnasio Piano Actividades Luz Sonido Bebe"} precio={"200.000$"} image={gimnasio} />
        <CardsItems name={"gol"} description={"descripcion"} precio={"20000$"} image={setbebe} />
        <CardsItems name={"gol"} description={"descripcion"} precio={"20000$"} image={setbebe} />

      </ContainerHomeComponent>
    </div>
  );
}
