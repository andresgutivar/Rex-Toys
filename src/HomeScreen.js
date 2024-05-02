import React from "react";
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import setbebe from "../src/imagenes/Set De Bebe Aprender A Comer Solo.webp";
import gimnasio from "../src/imagenes/Gimnasio Piano Actividades Luz Sonido Bebe.webp";
import sonajeros from "../src/imagenes/Sonajeros Divertidos X 4 Para Bebes.webp";
import hipo from "../src/imagenes/Hipopótamo Didáctico Aprende A Contar Con Sonido.webp";
import Navbar from "./components/NavBarComponent";

export default function HomeScreen() {
  return (
    <div style={{ paddingTop: '60px' }}>
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
    </div>
  );
}
