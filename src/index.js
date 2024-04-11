import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContainerComponent from "../src/components/containerComponent"
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContainerComponent>
    <App></App>
    </ContainerComponent>
    </BrowserRouter>
    

  </React.StrictMode>
);
