import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CardsItems from "./components/CardsItemsComponent";
import ContainerHomeComponent from "./components/ContainerHomeComponent";
import Navbar from "./components/NavBarComponent";
import butaca from "../src/imagenes/Butaca Booster Sin Respaldo Con Portavaso Disney.webp";
import gimnasio from "../src/imagenes/Gimnasio Piano Actividades Luz Sonido Bebe.webp";
import hipopotamo from "../src/imagenes/Hipopótamo Didáctico Aprende A Contar Con Sonido.webp";
import numeros from "../src/imagenes/Pote De Números Y Letras Magnéticas.webp";
import setbebe from "../src/imagenes/Set De Bebe Aprender A Comer Solo.webp";
import setmate from "../src/imagenes/Juego De Mate Petit Gourmet Con Mate Plastico.webp";
import tambor from "../src/imagenes/Tambor Musical Con Luz Y Sonido.webp";
import titere from "../src/imagenes/Titeres De Dedos Infantil De Bañera Para Bebe.webp";

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el archivo (subirlo a un servidor, etc.)
    console.log(selectedImage);
  };

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <ContainerHomeComponent style={{ marginTop: "10px" }}>
        <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
          <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Sube una imagen</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Form.Group>
            {preview && (
              <div className="image-preview">
                <Image src={preview} thumbnail />
              </div>
            )}
            <Button variant="primary" type="submit">
              Subir
            </Button>
          </Form>
        </Container>

        <CardsItems
          name={"Set de bebe"}
          description={"Set De Bebe Aprender A Comer Solo"}
          precio={"200.000$"}
          image={setbebe}
        />
        <CardsItems
          name={"Gimnasio"}
          description={"Gimnasio Piano Actividades Luz Sonido Bebe"}
          precio={"200.000$"}
          image={gimnasio}
        />
        <CardsItems
          name={"Butaca"}
          description={"Butaca Booster Sin Respaldo Con Portavaso Disney"}
          precio={"200.000$"}
          image={butaca}
        />
        <CardsItems
          name={"Hipopotamo Didactico"}
          description={"Hipopótamo Didáctico Aprende A Contar Con Sonido"}
          precio={"20000$"}
          image={hipopotamo}
        />
        <CardsItems
          name={"Set de mate"}
          description={"Juego De Mate Petit Gourmet Con Mate Plastico"}
          precio={"200.000$"}
          image={setmate}
        />
        <CardsItems
          name={"Numeros y Letras"}
          description={"Pote De Números Y Letras Magnéticas"}
          precio={"200.000$"}
          image={numeros}
        />
        <CardsItems
          name={"Tambor Musical"}
          description={"Tambor Musical Con Luz Y Sonido"}
          precio={"200.000$"}
          image={tambor}
        />
        <CardsItems
          name={"Titere"}
          description={"Titeres De Dedos Infantil De Bañera Para Bebe"}
          precio={"200.000$"}
          image={titere}
        />
        
        <Button
          variant="primary"
          type="submit"
          href="/Agregar Producto"
          style={{ width: "100%", marginTop: "20px" }}
        >
          Agregar producto
        </Button>
      </ContainerHomeComponent>
    </div>
  );
}
