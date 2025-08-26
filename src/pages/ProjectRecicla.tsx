import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github, Mail } from "lucide-react";

const ProjectRecicla = () => {
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
            
            <h1 className="text-4xl font-bold text-foreground mb-6">Mãos que Reciclam</h1>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              A consciência ambiental também tem espaço no IF Baiano – Campus Itapetinga. O projeto de Implantação da Coleta Seletiva foi um passo importante rumo a um campus mais sustentável e conectado com as necessidades do meio ambiente.
            </p>

          <img 
            src="/src/assets/recicla1.png" 
            alt="Loop Infinito"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
            
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Durante o projeto, foi iniciado o desenvolvimento de um aplicativo voltado para a coleta seletiva, facilitando o descarte correto dos resíduos e incentivando a participação da comunidade acadêmica.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-6">
              A proposta é unir tecnologia e responsabilidade ambiental, promovendo mudanças reais através de ações simples e eficazes.
            </p>

            <img 
            src="/src/assets/recicla.png" 
            alt="Loop Infinito"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
            
          </div>

          {/* Seção de Contatos */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contatos</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                <a 
                  href="https://github.com/BSI-IFBaiano" 
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

export default ProjectRecicla;