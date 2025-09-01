import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Exposicao = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const projetos = [
    {
      id: 1,
      title: "Robô X",
      description:
        "Esse robô, desenvolvido por Geovana e Lucas movimenta uma pinça para pegar e soltar objetos, operando com precisão",
      image: "/src/assets/roboX.png",
      link: "/eventos-exposicao",
    },
    {
      id: 2,
      title: "Cachorro Robô",
      description:
        "Esse robô simula os movimentos de um cachorro, podendo andar e reagir a comando simples. Esta projeto foi projetado por Vinicius e Pedro Lucas",
      image: "/src/assets/cachorro.png",
      link: "/campus-party",
    },
    {
      id: 3,
      title: "Guitarra Mecânica",
      description:
        "Os discentes Sila e Emanuel desenvolveram um robô que emite sons com base na distância captada por um sensor, simulando diferentes sons musicais",
      image: "/src/assets/guitarra.png",
      link: "/oficina-crimpagem",
    },
    {
      id: 4,
      title: "Removedor de Cubo Mágico",
      description:
        "Esse robô tem a capacidade de analisar e resolver um cubo mágico por meio de movimentos automaticos, esse prototipo foi desenvolvido por Gabriel '33', Gabriel '39' e Kauã",
      image: "/src/assets/removedor.png",
      link: "/oficina-crimpagem",
    },
    {
      id: 5,
      title: "Seguidor de Linha",
      description:
        "A mesma equipe do 'Removedor de Cubo Mágico, foram além do que foi planejo e criaram um segundo robô, o mesmo, detecta e segue uma linha no chão usando sensores de luminosidade",
      image: "/src/assets/seguidor.png",
      link: "/oficina-crimpagem",
    },
    {
      id: 6,
      title: "Mini-Empilhadeira",
      description:
        "Robô desenvolvido por Cristian e Bruno simula o funcionamento de uma empilhadeira, levantando e transportando pequenos objetos. O projeto de o potência de criar um sistema automatizados, onde devidamente programado, é capaz de descarregar um caminhão e ja armazenar no seu devido local ",
      image: "/src/assets/empilhadeira.png",
      link: "/oficina-crimpagem",
    },
  ];

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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/src/assets/expo1.png"
                    alt="Exposição Agropecuária - Estande 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-full overflow-hidden">
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
                      className="w-full h-96 object-contain p-4"
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
          {/* Grid de projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-12 gap-8">
            {projetos.map((projeto, index) => (
              <Card
                key={projeto.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-1">
                    {projeto.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed text-justify">
                    {projeto.description}
                  </p>

                  <Link to={projeto.link} className="block w-full">
                    <Button
                      className="text-primary hover:underline p-0 h-auto font-normal"
                      variant="link"
                    >
                      GitHub:
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-foreground text-justify mb-12 leading-relaxed">
            Além dos projetos de robótica, alunos do 2º semestre do curso de BSI
            do IF Baiano apresentaram soluções criativas e acessíveis,
            utilizando a plataforma Arduino para resolver problemas do cotidiano
            — com foco na inclusão, sustentabilidade e automação.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/src/assets/casinhaRosa.png"
                  alt="Exposição Agropecuária - Estande 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/src/assets/nerds.png"
                  alt="Exposição Agropecuária - Estande 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
          <p className="text-lg text-foreground text-justify mb-12 leading-relaxed">
            Entre os destaques esteve uma casa automatizada voltada para pessoas
            com deficiência física, com funcionalidades como acendimento de
            luzes por sensor de proximidade e uma fechadura eletrônica com
            cartão RFID — ainda em fase de revisão para aprimoramentos. O
            objetivo é garantir maior autonomia e acessibilidade, utilizando
            tecnologia simples e de baixo custo.
          </p>

          <h1
            className="text-4xl font-bold text-center mb-12 text-foreground font-heading"
            data-aos="fade-down"
          >
            Experiências do público
          </h1>

          <p className="text-lg text-foreground text-justify mb-12 leading-relaxed">
            A participação do BSI foi essencial, aproximando o instituto da
            comunidade. Hudson (coordenador) destacou a importância de mostrar o
            trabalho do curso, enquanto alunos como Almerinda e Geovana
            reforçaram o valor de levar o conhecimento acadêmico para fora e
            impulsionar áreas como robótica. A professora Roberta ressaltou o
            desenvolvimento de habilidades profissionais. O evento comprovou
            como tecnologia, inovação e educação pública transformam vidas. 
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Exposicao;
