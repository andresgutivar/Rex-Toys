import { Route, Routes } from "react-router-dom";

import LoginScreen from "./LoginScreen";
import React from 'react';
import RegisterScreen from "./RegisterScreen"
import SurchaseScreen from "./SurchaseScreen";

function App() {

  return (
     <Routes>     
        <Route exact path="/" element={<LoginScreen/>} /> 
        <Route exact path="/Iniciar sesion" element={<LoginScreen/>} /> 
        <Route exact path="/Registrarse" element={<RegisterScreen/>} /> 
        <Route exact path="/Comprar" element={<SurchaseScreen/>} /> 
        
    </Routes> 
  );
}

export default App;
