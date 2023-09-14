import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Contato: React.FC = () => {
  return (
    <div className="contato-page">
      <Header />
      <section className="hero bg-white flex items-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Entre em Contato Conosco
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aqui para atendê-lo. Entre em contato conosco para
              qualquer dúvida ou solicitação.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={require("../resources/telemarketing.jpg")}
              alt="Entre em Contato"
              className="w-full  rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Informações de Contato
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Nosso Endereço
                </h3>
                <p className="text-gray-600">
                  R. Paraguai, 1039 - Centro - Medianeira - PR, 85884-000
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Email de Contato
                </h3>
                <p className="text-gray-600">
                  Email: contato@videosomautocenter.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Formulário de Contato
          </h2>
          <div className="w-full md:w-2/3 mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="nome" className="text-white text-lg mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full p-2 rounded-md bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-white text-lg mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded-md bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="text-white text-lg mb-2">
                  Mensagem:
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="w-full p-2 rounded-md bg-white text-gray-800"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
