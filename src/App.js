import { Route, Routes } from "react-router-dom";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import AddProduct from "./AddProduct";
import CarritoScreen from "./CarritoScreen";
import HomeScreen from "./HomeScreen";
import ItemScreen from "./ItemScreen";
import LoginScreen from "./LoginScreen";
import React from "react";
import RegisterScreen from "./RegisterScreen";
import SurchaseScreen from "./SurchaseScreen";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyJXp0iBWPY4q-4wIj_aY1al1S7SWXkeQ",
  authDomain: "rex-toys-cb9f2.firebaseapp.com",
  projectId: "rex-toys-cb9f2",
  storageBucket: "rex-toys-cb9f2.appspot.com",
  messagingSenderId: "736618473878",
  appId: "1:736618473878:web:c07bf2f7fa4e4e333fd5b7",
  measurementId: "G-5FWWK43HWP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Exportar db aquí

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "Producto")),
      (data) => {
        // Conexión a la base de datos
        let auxTempDatos = [];
        for (let i = 0; i < data.docs.length; i++) {
          auxTempDatos.push(data.docs[i].data());
        }
        setDatos(auxTempDatos);
      }
    );

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomeScreen db={db} />} />
      <Route path="/Iniciar Sesion" element={<LoginScreen db={db} />} />
      <Route path="/Registrarse" element={<RegisterScreen db={db} />} />
      <Route path="/Comprar" element={<SurchaseScreen db={db} />} />
      <Route path="/Agregar Producto" element={<AddProduct db={db} />} />
      <Route path="/Ver Producto" element={<ItemScreen />} />
      <Route path="/Carrito" element={<CarritoScreen />} />
    </Routes>
  );
}

export default App;
