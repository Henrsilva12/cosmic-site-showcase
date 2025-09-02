import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const blog = [
    {
      id: 1,
      title: "Grupo de Estudos em Programação",
      description:
        "Um grupo de estudos para alunos de Sistemas de Informação do IF Baiano, focado em reforçar lógica de programação e algoritmos através de aulas práticas, desafios e projetos.",
      image: "/src/assets/loop1.png",
      link: "/project-loop",
    },
    {
      id: 2,
      title: "Exposição Agropecuária",
      description:
        "Alunos do curso de Sistemas de Informação surpreenderam na Exposição Agropecuária de Itapetinga com robôs interativos, casas automatizadas e soluções criativas.",
      image: "/src/assets/exposicao2025.png",
      link: "/eventos-exposicao",
    },
    {
      id: 3,
      title: "Programação de Jogos com Python",
      description:
        "Jovens de Itapetinga descobriram o mundo da programação criando seus próprios jogos! Com Python e muita criatividade, a tecnologia virou diversão nas salas de aula.",
      image: "/src/assets/python.png",
      link: "/project-game-on",
    },
    {
      id: 4,
      title: "Automação com Arduino",
      description:
        "Crianças da Escola Noralice descobriram o mundo da automação com Arduino em um projeto cheio de LEDs, sensores e muita diversão.",
      image: "/src/assets/car1.png",
      link: "/project-robotica",
    },
    {
      id: 5,
      title: "Projeto de Coleta Seletiva",
      description:
        "O campus Itapetinga deu um passo verde com o projeto de Coleta Seletiva. Tecnologia a serviço do meio ambiente: em breve, um app para facilitar o descarte correto!",
      image: "/src/assets/recicla1.png",
      link: "/project-recicla",
    },
    {
      id: 6,
      title: "Campus Party PE 2024",
      description:
        "Alunos do IF Baiano viveram dias incríveis na Campus Party PE 2024, explorando IA, robótica, games e muito mais. Uma experiência única no maior festival de inovação.",
      image: "/src/assets/campus-party.png",
      link: "/eventos-campus-party",
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
            Blog
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.map((blog, index) => (
              <Card
                key={blog.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-justify flex-grow">
                    {blog.description}
                  </p>

                  <Link to={blog.link} className="block w-full mt-auto">
                    <Button variant="blue" className="w-full group">
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

export default Blog;