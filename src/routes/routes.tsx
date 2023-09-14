import {
  BrowserRouter,
  Routes as RouterContext,
  Route,
} from "react-router-dom";

import React from "react";
import LandingPage from "../pages/LandingPage";
import Registrar from "../pages/Registrar";
import Logar from "../pages/Logar";
import Sobre from "../pages/Sobre";
import Servicos from "../pages/Servicos";
import Contato from "../pages/Contato";
const Routes = () => {
  return (
    <BrowserRouter>
      <RouterContext>
        <Route path="/" element={<LandingPage />} index />
        <Route path="registrar" element={<Registrar />} />
        <Route path="logar" element={<Logar />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="contato" element={<Contato />} />
      </RouterContext>
    </BrowserRouter>
  );
};
export default Routes;
