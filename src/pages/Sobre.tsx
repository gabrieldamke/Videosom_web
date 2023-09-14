import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Sobre: React.FC = () => {
  Chart.register(...registerables);
  const faturamentoData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Faturamento Anual (R$ bilhões)",
        data: [
          { x: "2019", y: 10 },
          { x: "2020", y: 20 },
          { x: "2021", y: 25 },
          { x: "2022", y: 35 },
          { x: "2023", y: 40 },
        ],
        borderColor: "rgba(33, 150, 243, 1)",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
      },
    ],
  };
  const funcionariosData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Número de Funcionários",
        data: [
          { x: "2019", y: 3000 },
          { x: "2020", y: 3500 },
          { x: "2021", y: 4000 },
          { x: "2022", y: 4500 },
          { x: "2023", y: 5000 },
        ],
        borderColor: "rgba(33, 150, 243, 1)",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
      },
    ],
  };

  return (
    <div className="sobre-page">
      <Header />
      <section className="hero bg-white flex items-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Sobre a Videosom Autocenter
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conheça nossa história e paixão pelo som automotivo.
            </p>
          </div>
          <div className="md:w-1/2">
            {" "}
            <img
              src={require("../resources/pioes.png")}
              alt="Sobre a Empresa"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Linha do Tempo</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="1987"
              iconStyle={{ background: "rgb(29, 78, 216)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Fundação da Empresa
              </h3>
              <p>
                Em 1987, a Videosom Autocenter foi fundada em Medianeira por
                Enoir, um jovem empreendedor.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(29, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="1995"
              iconStyle={{ background: "rgb(29, 78, 216)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Expansão</h3>
              <p>
                Em 1995, a Videosom já era a maior empresa de som automotivo do
                oeste do Paraná.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2003"
              iconStyle={{ background: "rgb(29, 78, 216)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">IPO</h3>
              <p>
                Em 2003, a Videosom foi listada na Bolsa de São Paulo, com um
                valuation de R$4 Bilhões
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2010"
              iconStyle={{ background: "rgb(29, 78, 216)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Aquisições</h3>
              <p>
                Em 2010, a Videosom adquiriu 90% das ações da Magazine Luiza e
                fez uma proposta para adquirir 30% da Amazon.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2010"
              iconStyle={{ background: "rgb(29, 78, 216)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Aquisições</h3>
              <p>
                Em 2023, a receita da Videosom ultrapassou o PIB do Paraguai,
                com um faturamento superior a R$40 bilhões
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold text-red-600 mb-8">
            Faturamento e Funcionários
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Faturamento Anual
                </h3>
                <p className="text-gray-600">
                  Em 2023, o faturamento anual da Videosom ultrapassou o PIB do
                  Paraguai, com um total de mais de R$40 bilhões.
                </p>
                <Line data={faturamentoData} />
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Número de Funcionários
                </h3>
                <p className="text-gray-600">
                  Atualmente, a Videosom Autocenter emprega mais de 5.000
                  funcionários dedicados em todo o mundo.
                </p>
                <Line data={funcionariosData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold text-white mb-8">
            Depoimentos de Clientes
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={require("../resources/mandrake2.png")}
                  alt="Cliente 1"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <p className="text-gray-600">
                  "O portão de casa estragou porque eu tinha batido bêbado nele.
                  Os moços da Videosom foram muito competentes e arrumaram
                  rapidinho." - Cremilson Wesley do Espírito Santo
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={require("../resources/mandrake1.png")}
                  alt="Cliente 2"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <p className="text-gray-600">
                  "Coloquei um sonzão de patrão no meu Gol e sem querer estorei
                  o vidro da Delegacia da Polícia Militar. Infelizmente fui
                  preso, mas o som ficou ótimo!" - Wellison Blakesley
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold text-red-600 mb-8">
            Equipe de Liderança
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                 src={require("../resources/ceo.png")}
                  alt="CEO"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Daniel e Enoir
                </h3>
                <p className="text-gray-600">
                  O enoir manda e o Daniel obedece
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Sobre;
