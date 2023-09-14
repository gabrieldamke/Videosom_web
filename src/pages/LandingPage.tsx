import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero bg-white flex items-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Videosom Autocenter
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A solução definitiva para o seu som automotivo
            </p>
            <Link to="/sobre">
              <a className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
                Saiba Mais
              </a>
            </Link>
          </div>
          <div className="md:w-1/2">
            {" "}
            <img
              src={require("../resources/caixaSom.png")}
              alt="Som Automotivo"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section id="saiba-mais" className="features bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Nossos Serviços
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Construção de Carretinha de som
                </h3>
                <p className="text-gray-600">
                  Destrua o vidro da igreja com os graves das carretinhas
                  VideoSom. Só de chegar no role com uma carretinha dessas, as
                  novinhas vão querer casar contigo.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Instalação de som automotivo
                </h3>
                <p className="text-gray-600">
                  Conquiste o coração das novinhas com o som Videosom de patrão.
                  Desde o Uninho da firma até o Escort de patrão, o som Videosom
                  garante que as novinhas fiquem doidas!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Instalação de isofilme
                </h3>
                <p className="text-gray-600">
                  Tem um civic 2005 preto rebaixado e quer ser confudido com um
                  criminoso em potencial? A Videosom instala isofilmes que vão fazer você
                  parecer o Pablo Escobar de Medianeira!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-600 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-8">
              Som Automotivo de Alta Qualidade
            </h2>
            <p className="text-lg mb-4">
              Na Videosom Autocenter, estamos comprometidos em oferecer o melhor
              som automotivo para você. Nossos sistemas de áudio são projetados
              para proporcionar uma experiência sonora excepcional enquanto você
              dirige.
            </p>
            <p className="text-lg">
              Quer você seja um entusiasta de música ou simplesmente queira
              melhorar a qualidade do som do seu carro, nossos especialistas
              estão aqui para ajudar. Oferecemos uma ampla gama de opções de
              áudio, desde alto-falantes de alta potência até sistemas de som
              surround personalizados.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_wwXE9owpI8?si=_-FJv71i9BjgvdS4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <img
              src={require("../resources/carretinha.png")}
              alt="Imagem da Empresa"
              className="w-256 rounded-lg h-256"
            />
          </div>
          <div className="md:w-1/2 text-white order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-8">
              36 Anos de Pura Paixão Pelo Som
            </h2>
            <p className="text-lg">
              Há mais de três décadas, a Videosom Autocenter tem sido a
              principal referência em som automotivo de alta qualidade. Desde o
              nosso início, temos compartilhado a mesma paixão pelos sons
              incríveis que a música pode proporcionar ao dirigir.
            </p>
            <p className="text-lg mt-4">
              Durante esses 36 anos, crescemos e nos adaptamos às últimas
              tendências em tecnologia de áudio automotivo, sempre com o
              compromisso de fornecer aos nossos clientes o melhor em som
              automotivo. Nossa jornada é alimentada pela paixão e dedicação ao
              som e pela busca contínua da excelência em nossos produtos e
              serviços.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
