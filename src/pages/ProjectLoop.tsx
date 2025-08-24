import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectLoop = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Publicada em 24/08/2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-semibold">por Henrique Santos</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">Loop Infinito</h1>
          </div>

 
          <img 
            src="/path/to/loop-infinito-image.jpg" 
            alt="Loop Infinito"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              O projeto "Loop Infinito: Grupo de Estudo em Algoritmo e Linguagem de Programação" tem como objetivo principal oferecer um espaço sistematizado de estudo, troca de conhecimentos e reforço dos conteúdos de algoritmos e programação para estudantes do curso de Bacharelado em Sistemas de Informação do IF Baiano – Campus Itapetinga.
            </p>

            <img 
            src="/path/to/loop-infinito-image.jpg" 
            alt="Loop Infinito"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              A proposta visa atender, prioritariamente, estudantes com dificuldades nestas disciplinas fundamentais, oferecendo suporte didático-pedagógico complementar, com enfoque na resolução de problemas, raciocínio lógico e desenvolvimento de pequenos projetos práticos. As atividades serão conduzidas por um docente coordenador e poderão contar com monitores voluntários, em encontros semanais, presenciais ou virtuais.
            </p>

            <img 
            src="/path/to/loop-infinito-image.jpg" 
            alt="Loop Infinito"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Ao final do semestre, os resultados esperados incluem a produção de relatórios de acompanhamento, avaliações diagnósticas e um compilado de exercícios resolvidos e discutidos no grupo.
            </p>
          </div>

          {/* Seção de Contatos */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contatos</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                <span className="text-muted-foreground">Lorem ipsum@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                <a 
                  href="https://github.com/loop-infinito" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  GitHub do Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </div>
  );
};

export default ProjectLoop;