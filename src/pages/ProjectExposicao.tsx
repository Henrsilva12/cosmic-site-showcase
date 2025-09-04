import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectExposicao = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const projectExposicao = [
    {
      id: 1,
      title: "Cachorro Robô",
      description:
        "Esse robô simula os movimentos de um cachorro, podendo andar e reagir a comando simples. Esta projeto foi projetado por Vinicius e Pedro Lucas",
      image: "/src/assets/cachorro.png",
    },
    {
      id: 2,
      title: "Guitarra Mecânica",
      description:
        "Os discentes Sila e Emanuel desenvolveram um robô que emite sons com base na distância captada por um sensor, simulando diferentes sons musicais",
      image: "/src/assets/guitarra.png",
    },
    {
      id: 3,
      title: "Montador de Cubo Mágico",
      description:
        "Esse robô tem a capacidade de analisar e resolver um cubo mágico por meio de movimentos automaticos, esse prototipo foi desenvolvido por Gabriel '33', Gabriel '39' e Kauã",
      image: "/src/assets/removedor.png",
    },
    {
      id: 4,
      title: "Seguidor de Linha",
      description:
        "A mesma equipe do 'Montador de Cubo Mágico, foram além do que foi planejo e criaram um segundo robô, o mesmo, detecta e segue uma linha no chão usando sensores de luminosidade",
      image: "/src/assets/seguidor.png",
    },
    {
      id: 5,
      title: "Mini-Empilhadeira",
      description:
        "Robô desenvolvido por Cristian e Bruno simula o funcionamento de uma empilhadeira, levantando e transportando pequenos objetos. O projeto de o potência de criar um sistema automatizados, onde devidamente programado, é capaz de descarregar um caminhão e ja armazenar no seu devido local ",
      image: "/src/assets/empilhadeira.png",
    },
  ];

  const carouselImages = [
    "/src/assets/carrDog.png",
    "/src/assets/casaAutonoma.png",
    "/src/assets/brunoExpo.png",
    "/src/assets/kauanExpo.png",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4 ">

          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Exposição Agropecuária
          </h1>

          <div className="mb-12" data-aos="fade-up">

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Publicada em 29/08/2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-semibold">por Hércules Silva</span>
              </div>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Durante a tradicional{" "}
              Exposição Agropecuária de Itapetinga - Bahia, o curso de
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
          </div>

          <div className="mb-12" data-aos="fade-up">
            <div className="relative bg-muted/30 rounded-lg p-4">
              <div className="flex justify-center items-center">
                <Card className="overflow-hidden max-w-4xl">
                  <img
                    src={carouselImages[currentImage]}
                    alt={`Galeria Exposição ${currentImage + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </Card>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-primary scale-110"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-center mt-2 text-sm text-muted-foreground">
                {currentImage + 1} / {carouselImages.length}
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectExposicao.map((projeto, index) => (
              <Card
                key={projeto.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
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
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {projeto.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-justify flex-grow">
                    {projeto.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-lg text-foreground text-justify mb-12 leading-relaxed">
            Além dos projetos de robótica, alunos do 2º semestre do curso de BSI
            do IF Baiano apresentaram soluções creativas e acessíveis,
            utilizando a plataforma Arduino para resolver problemas do cotidiano
            — com foco na inclusão, sustentabilidade e automação.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/src/assets/casinhaRosa.png"
                  alt="Casa automatizada para pessoas com deficiência"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/src/assets/casaAutonoma.png"
                  alt="Casa autonoma"
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
            trabalho do curso, enquanto alunos como Almerinda e Geovanna
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

export default ProjectExposicao;