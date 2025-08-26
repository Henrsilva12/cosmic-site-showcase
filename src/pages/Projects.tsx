import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Loop Infinito",
      description:
        "Um grupo de estudos para alunos de Sistemas de Informação do IF Baiano, focado em reforçar lógica de programação e algoritmos através de aulas práticas, desafios e projetos. Ideal para quem quer superar dificuldades e evoluir na carreira tech!",
      image: "/src/assets/loop1.jpg",
      link: "/project-loop",
      slug: "loop-infinito",
    },
    {
      id: 2,
      title: "Mãos que Reciclam",
      description:
        "O campus Itapetinga avança na coleta seletiva com um novo app para facilitar o descarte correto. Tecnologia e consciência ambiental caminhando juntas!",
      image: "/src/assets/recicla1.png",
      link: "/project-recicla",
    },
    {
      id: 3,
      title: "Game On",
      description:
        "Alunos de BSI incentivaram Jovens de Itapetinga a descobrirem o mundo da programação criando seus próprios jogos! Com Python e muita criatividade, a tecnologia virou diversão nas salas de aula.",
      image: "/src/assets/gameon1.png",
      link: "/project-game-on",
    },
    {
      id: 4,
      title: "Robótica na Prática",
      description:
        "Crianças da Escola Noralice descobriram o mundo da automação com Arduino em um projeto cheio de LEDs, sensores e muita diversão. Aprender tecnologia nunca foi tão empolgante!",
      image: "/src/assets/robotica1.png",
      link: "/project-robotica",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center mb-6 text-foreground font-heading"
            data-aos="fade-down"
          >
            Projetos
          </h1>

          <p
            className="text-lg text-foreground text-justify max-w-2xl max-w-full mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Nesta seção, você encontra uma coletânea dos projetos desenvolvidos
            ao longo do curso de Sistemas de Informação do IF Baiano – Campus
            Itapetinga. São iniciativas que unem teoria e prática, explorando
            áreas como tecnologia, inovação, redes, robótica, sustentabilidade,
            programação e muito mais. Clique em cada projeto para conhecer mais
            detalhes sobre as ideias, processos e resultados.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <Link to={project.link} className="block w-full">
                    <Button className="w-full group">
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
