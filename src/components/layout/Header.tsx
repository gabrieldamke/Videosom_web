import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={require("../../resources/LogoVS.png")}
              alt="Logo"
              className="h-10 w-32 mr-4"
            />
          </div>
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-black">
                Inicio
              </Link>
              <Link to="/sobre" className="text-gray-600 hover:text-black">
                Sobre
              </Link>
              <Link to="/servicos" className="text-gray-600 hover:text-black">
                Serviços
              </Link>
              <Link to="/contato" className="text-gray-600 hover:text-black">
                Contato
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/logar" className="text-gray-600 hover:text-black">
            Logar
          </Link>
          <Link
            to="/registrar"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-200"
          >
            Registrar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
