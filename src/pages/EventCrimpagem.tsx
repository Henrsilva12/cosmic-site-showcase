import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Crimpagem = () => {
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
          {/* Título Principal */}
          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Oficina de Crimpagem
          </h1>

          {/* Primeira Seção */}

          <div className="mb-12" data-aos="fade-up">
            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Os estudantes do curso de{" "}
              <b>Bacharelado em Sistemas de Informação (BSI)</b> participaram de
              uma oficina prática de crimpagem de cabos de rede, uma atividade
              essencial para quem deseja se aprofundar na área de infraestrutura
              de redes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/nerd2.png"
                    alt="Exposição Agropecuária - Estande 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/equipamento.png"
                    alt="Exposição Agropecuária - Estande 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Durante a oficina, os alunos aprenderam como montar cabos de rede
              padrão RJ-45, utilizando ferramentas como alicate de crimpagem,
              conectores e testadores. O objetivo foi desenvolver habilidades
              práticas para a montagem e verificação de cabos de par trançado,
              fundamentais na estruturação de redes locais (LAN).
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/testador.png"
                    alt="Exposição Agropecuária - Estande 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/nerds3.png"
                    alt="Exposição Agropecuária - Estande 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
            A oficina foi uma excelente oportunidade para aplicar conceitos
            vistos em sala e dar os primeiros passos na parte técnica das redes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Crimpagem;
