import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CampusParty = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4 ">

          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Campus Party
          </h1>

-
          <div className="mb-12" data-aos="fade-up">
            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Entre os dias de evento da Campus Party 2024 em Pernambuco, um
              grupo de alunos do curso de Bacharelado em Sistemas de Informação
              (BSI) marcou presença e viveu de perto uma das maiores
              experiências imersivas em tecnologia, inovação e cultura geek do
              país.
            </p>

            <div className="flex justify-center mb-12">
              <Card className="overflow-hidden max-w-4xl">
-                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/campus-party.png"
                    alt="Viagem do Campus Party"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Sem a responsabilidade de palestrar ou organizar atividades, os
              estudantes aproveitaram para acampar, explorar as atrações e
              absorver o ambiente inspirador. Foi uma oportunidade de conhecer
              tendências em áreas como inteligência artificial, segurança da
              informação, desenvolvimento de jogos, robótica, empreendedorismo e
              muito mais.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="/src/assets/campus-party-nordeste-5-1.jpeg"
                    alt="Evento do Campus Party"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="/src/assets/tendasParty.jpg"
                    alt="Evento do Campus Party"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
          <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
            A vivência no evento também permitiu uma troca rica com outros
            participantes e profissionais da área, reforçando a importância de
            sair da sala de aula para mergulhar em experiências reais do
            ecossistema tecnológico.
          </p>

          <div className="flex justify-center mb-12">
            <Card className="overflow-hidden max-w-4xl">
              {" "}

              <div className="relative h-full overflow-hidden">
                <img
                  src="/src/assets/campusParty2.jpg"
                  alt="Evento do Campus Party"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
            Para quem é apaixonado por tecnologia, a Campus Party vai muito além
            das palestras: é um espaço de conexão, criatividade e descobertas. E
            os alunos de BSI aproveitaram cada segundo!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusParty;
