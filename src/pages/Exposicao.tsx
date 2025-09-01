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

const Eventos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const carouselImages = [
    "/src/assets/carrocel.png",
    "/src/assets/carrocel2.png",
    "/src/assets/carrocel3.png",
  ];

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
            Exposição Agropecuária
          </h1>

          {/* Primeira Seção */}

          <div className="mb-12" data-aos="fade-up">
            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Durante a tradicional{" "}
              <b>Exposição Agropecuária de Itapetinga - Bahia</b>, o curso de
              Bacharelado em Sistemas de Informação (BSI) do IF Baiano se
              destacou com uma série de projetos criativos que levaram
              tecnologia e interatividade ao público. Alunos de diferentes
              semestres apresentaram trabalhos desenvolvidos em sala de aula,
              mostrando como a robótica, a automação e o uso do Arduino podem
              transformar o aprendizado em soluções práticas para o dia a dia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/src/assets/expo1.png"
                    alt="Exposição Agropecuária - Estande 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/src/assets/expo2.png"
                    alt="Exposição Agropecuária - Estande 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A participação foi marcada por interações enriquecedoras e pela
              oportunidade específica de mostrar como a tecnologia pode ser
              aplicada em diferentes contextos, desde a agricultura até a gestão
              de recursos. Foi uma experiência valiosa que fortaleceu os laços
              entre a academia e a comunidade, demonstrando o impacto positivo
              que a educação tecnológica pode ter no desenvolvimento local.
            </p>
            <div className="mb-12" data-aos="fade-up">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper rounded-lg shadow-lg"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-64 object-contain p-4"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Da sala de aula para a prática
          </h1>
          <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
            Nas aulas de robótica, os estudantes se organizaram para encarar um
            desafio prático: montar e programar robôs utilizando as plataformas
            BricxCC e LDD. A atividade começou com a construção de robôs
            seguidores de linha, uma introdução essencial para compreender
            componentes físicos, sensores e lógica de programação.
          </p>
          <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
            Com a aproximação da exposição escolar, os grupos desenvolveram
            novos projetos para apresentar ao público. Alguns modelos possuíam
            instruções prontas, mas os alunos foram além: estudaram cada peça e
            adaptaram ou criaram suas próprias programações, explorando a lógica
            por trás de cada função. Os robôs apresentados foram:
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;
