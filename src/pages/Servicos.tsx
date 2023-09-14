import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Servicos: React.FC = () => {
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showPrice2, setShowPrice2] = useState<boolean>(false);
  const [showPrice3, setShowPrice3] = useState<boolean>(false);
  const togglePrice = () => {
    setShowPrice(!showPrice);
  };

  const togglePrice2 = () => {
    setShowPrice2(!showPrice2);
  };

  const togglePrice3 = () => {
    setShowPrice3(!showPrice3);
  };
  return (
    <div className="servicos-page">
      <Header />
      <section className="hero bg-white flex items-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conheça os serviços de alta qualidade que oferecemos.
            </p>
          </div>
          <div className="md:w-1/2">
            {" "}
            <img
              src={require("../resources/ferrari.png")}
              alt="Serviços da Empresa"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold text-white mb-8">
            Nossos Serviços Principais
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Serviço 1 */}
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={require("../resources/carretinha.png")}
                  alt="Construção de Carretinha de Som"
                  className="w-96 h-96 rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Construção de Carretinha de Som
                </h3>
                <p className="text-gray-600">
                  A Videosom é reconhecida por fazer as carretinhas mais
                  potentes da região. Em parceria com a Nasa, estouramos todos
                  os tipos de vidros com o grave absurdo dessas máquinas.
                </p>
                <button
                  onClick={togglePrice}
                  className="text-blue-600 hover:underline"
                >
                  {!showPrice ? "Ver Preços" : "Fechar Preços"}
                </button>
                {showPrice && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Preço: R$ 5.000,00
                    </h4>
                    <p className="text-gray-600">
                      O preço inclui a construção da carretinha de som com os
                      melhores materiais e tecnologia.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={require("../resources/GolDoWilliam.png")}
                  alt="Instalação de Som Automotivo"
                  className="w-96 h-96  rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Instalação de Som Automotivo
                </h3>
                <p className="text-gray-600">
                  Está solteiro e solidário e precisa de uma namorada? Com o som
                  Videosom Autocenter você vai conquistar quantas namoradas você
                  quiser! Instalamos som em todo tipo de carros, desde Parati
                  até Bmw x6!
                </p>
                <button
                  onClick={togglePrice2}
                  className="text-blue-600 hover:underline"
                >
                  {!showPrice2 ? "Ver Preços" : "Fechar Preços"}
                </button>
                {showPrice2 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Preço: R$ 3.000,00
                    </h4>
                    <p className="text-gray-600">
                      O preço inclui a construção do som com 4 alto falantes.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={require("../resources/portao.png")}
                  alt="Instalação de Isolamento Acústico"
                  className="w-96 h-96 rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Conserto de portões
                </h3>
                <p className="text-gray-600">
                  Voltou meio confuso do baile e pinchou o Kadett no portão? A
                  videosom realiza o concerto do seu portão com excelência.
                  Nossos funcionários fizeram certificações na Alemanha para
                  solucionar seu problema da melhor forma.
                </p>
                <button
                  onClick={togglePrice3}
                  className="text-blue-600 hover:underline"
                >
                  {!showPrice3 ? "Ver Preços" : "Fechar Preços"}
                </button>
                {showPrice3 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Preço: R$ 1.000,00
                    </h4>
                    <p className="text-gray-600">
                      O preço inclui a troca das peças necessárias.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Servicos;
