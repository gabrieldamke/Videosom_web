import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registrar() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white ">
      <div className="bg-white p-8 rounded-lg shadow-lg xl:w-120">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <img
              src={require("../resources/LogoVS.png")}
              alt="Logo da Empresa"
              className="h-12 w-22 mx-auto mb-4"
            />
            <p className="text-center text-gray-600 mb-4">
              Registrar uma conta
            </p>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border-2 border-gray-300 px-4 py-2 mb-3"
              />
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="rounded-lg border-2 border-gray-300 px-4 py-2 mb-3"
                required
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="rounded-lg text-lg border-2 border-gray-300 px-4 py-2 mb-3"
                required
              />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                className="rounded-lg border-2 border-gray-300 px-4 py-2 mb-3"
                required
              />
              <Link
                to="/"
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg w-full text-center"
              >
                Registrar
              </Link>
            </div>
            <p className="text-center text-gray-600 my-4">ou</p>
            <Link to="/logar">
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-lg shadow w-full"
              >
                Fazer Login
              </button>
            </Link>
            <hr className="my-4" />
            <img
              src={require("../resources/LogoVSGrey.png")}
              alt="Logo"
              className="mx-auto h-12 w-32"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={require("../resources/carroSom.png")}
              alt="Imagem lateral"
              className="w-100 h-auto max-h-96 ml-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
