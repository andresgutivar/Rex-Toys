//import { doc, setDoc } from "firebase/firestore"; No tocar

import { Button } from "react-bootstrap";
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";


import butaca from "../src/imagenes/Butaca Booster Sin Respaldo Con Portavaso Disney.webp";
import hipopotamo from "../src/imagenes/Hipopótamo Didáctico Aprende A Contar Con Sonido.webp";
import setmate from "../src/imagenes/Juego De Mate Petit Gourmet Con Mate Plastico.webp";
import numeros from "../src/imagenes/Pote De Números Y Letras Magnéticas.webp";

import tambor from "../src/imagenes/Tambor Musical Con Luz Y Sonido.webp";
import titere from "../src/imagenes/Titeres De Dedos Infantil De Bañera Para Bebe.webp";


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

      <ContainerHomeComponent style={{ marginTop: '10px' }}>
        <CardsItems name={"Set de bebe"} description={"Set De Bebe Aprender A Comer Solo"} precio={"200.000$"} image={setbebe} />
        <CardsItems name={"Gimnasio"} description={"Gimnasio Piano Actividades Luz Sonido Bebe"} precio={"200.000$"} image={gimnasio} />
        <CardsItems name={"Butaca"} description={"Butaca Booster Sin Respaldo Con Portavaso Disney"} precio={"200.000$"} image={butaca} />
        <CardsItems name={"Hipopotamo Didactico"} description={"Hipopótamo Didáctico Aprende A Contar Con Sonido"} precio={"20000$"} image={hipopotamo} />
        <CardsItems name={"Set de mate"} description={"Juego De Mate Petit Gourmet Con Mate Plastico"} precio={"200.000$"} image={setmate} />
        <CardsItems name={"Numeros y Letras"} description={"Pote De Números Y Letras Magnéticas"} precio={"200.000$"} image={numeros} />
       
        <CardsItems name={"Tambor Musical"} description={"Tambor Musical Con Luz Y Sonido"} precio={"200.000$"} image={tambor} />
        <CardsItems name={"Titere"} description={"Titeres De Dedos Infantil De Bañera Para Bebe"} precio={"200.000$"} image={titere} />
        


      </ContainerHomeComponent>
    </div>
  );
}
