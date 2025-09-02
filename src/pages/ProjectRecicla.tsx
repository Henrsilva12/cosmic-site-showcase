import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectRecicla = () => {
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
        <div className="container mx-auto px-4">
        
          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Mãos que Reciclam
          </h1>

          <div className="mb-12" data-aos="fade-up">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Publicada em 24/08/2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-semibold">por Henrique Santos</span>
              </div>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A consciência ambiental também tem espaço no IF Baiano – Campus
              Itapetinga. O projeto de Implantação da Coleta Seletiva foi um
              passo importante rumo a um campus mais sustentável e conectado com
              as necessidades do meio ambiente.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/recicla1.png"
                    alt="Projeto de Coleta Seletiva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Durante o projeto, foi iniciado o desenvolvimento de um aplicativo
              voltado para a coleta seletiva, facilitando o descarte correto dos
              resíduos e incentivando a participação da comunidade acadêmica.
            </p>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A proposta é unir tecnologia e responsabilidade ambiental,
              promovendo mudanças reais através de ações simples e eficazes.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/reciclaa.png"
                    alt="Tela do aplicativo de coleta seletiva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contatos</h2>
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