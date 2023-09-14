import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="bg-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={require("../../resources/LogoVS.png")}
              alt="Logo"
              className="h-10 w-32 mr-4"
            />
          </div>
          <nav className="flex-1 mt-4 md:mt-0 md:flex md:justify-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-black">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 hover:text-black">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-black">
                  Contato
                </Link>
              </li>
              {isMobile ? (
                // Renderizar o ícone na versão mobile
                <li>
                  <img
                    src={require("../../resources/user.png")}
                    alt="Som Automotivo"
                    className="w-8 h-8 rounded-lg"
                  />
                </li>
              ) : (
                <></>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-4 md:mt-0 md:flex md:items-center md:space-x-4">
          {!isMobile ? (
            // Renderizar o ícone na versão mobile
            <>
              <Link to="/logar" className="text-gray-600 hover:text-black">
                Logar
              </Link>
              <Link
                to="/registrar"
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-200"
              >
                Registrar
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
