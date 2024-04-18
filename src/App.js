import { Route, Routes } from "react-router-dom";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import React from 'react';
import RegisterScreen from "./RegisterScreen"
import SurchaseScreen from "./SurchaseScreen";

function App() {

  return (
     <Routes>     
        <Route exact path="/" element={<HomeScreen/>} /> 
        <Route exact path="/Iniciar sesion" element={<LoginScreen/>} /> 
        <Route exact path="/Registrarse" element={<RegisterScreen/>} /> 
        <Route exact path="/Comprar" element={<SurchaseScreen/>} /> 
        
    </Routes> 
  );
}

export default App;
