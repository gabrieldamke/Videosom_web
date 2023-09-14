import { Link } from "react-router-dom";

export default function Logar() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <img
          src={require("../resources/LogoVS.png")}
          alt="Logo da Empresa"
          className="h-24 mx-auto mb-4"
        />
        <p className="text-center text-gray-600 mb-4">Logar para continuar</p>
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg border-2 border-gray-300 px-4 py-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Senha"
          className="rounded-lg border-2 border-gray-300 px-4 py-2 mb-4 w-full"
        />
        <Link to="/">
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Logar
          </button>
        </Link>
        <span className="text-gray-500 font-bold cursor-pointer my-4">
          Esqueci minha senha
        </span>
        <p className="text-center text-gray-600 my-4">ou</p>
        <Link to="/registrar">
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-lg shadow w-full"
          >
            Criar uma conta
          </button>
        </Link>
        <hr className="my-4" />
        <img
          src={require("../resources/LogoVSGrey.png")}
          alt="Logo"
          className="mx-auto h-20"
        />
      </div>
    </div>
  );
}
