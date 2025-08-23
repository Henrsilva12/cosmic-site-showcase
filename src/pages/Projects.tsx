import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Loop Infinito",
      description: "Um grupo de estudos para alunos de Sistemas de Informação do IF Baiano, focado em reforçar lógica de programação e algoritmos através de aulas práticas, desafios e projetos. Ideal para quem quer superar dificuldades e evoluir na carreira tech!",
      image: "/path/to/image1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Mãos que Reciclam",
      description: "O campus Itapetinga avança na coleta seletiva com um novo app para facilitar o descarte correto. Tecnologia e consciência ambiental caminhando juntas!",
      image: "/path/to/image2.jpg",
      link: "#"
    },
    {
      id: 3, 
      title: "Game On",
      description: "Alunos de BSI incentivaram Jovens de Itapetinga a descobrirem o mundo da programação criando seus próprios jogos! Com Python e muita criatividade, a tecnologia virou diversão nas salas de aula.",
      image: "/path/to/image3.jpg",
      link: "#"
    },
    {
      id: 4, 
      title: "Robótica na Prática",
      description: "Crianças da Escola Noralice descobriram o mundo da automação com Arduino em um projeto cheio de LEDs, sensores e muita diversão. Aprender tecnologia nunca foi tão empolgante!",
      image: "/path/to/image4.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-foreground font-heading">
            Projetos
          </h1>
          
          <p className="text-lg text-muted-foreground text-justify max-w-full text-slate-950 max-w-2xl mb-12">
           Nesta seção, você encontra uma coletânea dos projetos desenvolvidos ao longo do curso de Sistemas de Informação do IF Baiano – Campus Itapetinga. São iniciativas que unem teoria e prática, explorando áreas como tecnologia, inovação, redes, robótica, sustentabilidade, programação e muito mais. Clique em cada projeto para conhecer mais detalhes sobre as ideias, processos e resultados.
          </p>
          

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-1">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  <Button className="w-full group">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;