import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import "aos/dist/aos.css";

const ProjectLoop = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4">

          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Loop Infinito
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
              O projeto "Loop Infinito: Grupo de Estudo em Algoritmo e Linguagem
              de Programação" tem como objetivo principal oferecer um espaço
              sistematizado de estudo, troca de conhecimentos e reforço dos
              conteúdos de algoritmos e programação para estudantes do curso de
              Bacharelado em Sistemas de Informação do IF Baiano – Campus
              Itapetinga.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/loop1.png"
                    alt="Loop Infinito"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A proposta visa atender, prioritariamente, estudantes com
              dificuldades nestas disciplinas fundamentais, oferecendo suporte
              didático-pedagógico complementar, com enfoque na resolução de
              problemas, raciocínio lógico e desenvolvimento de pequenos
              projetos práticos. As atividades serão conduzidas por um docente
              coordenador e poderão contar com monitores voluntários, em
              encontros semanais, presenciais ou virtuais.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/loop2.png"
                    alt="Loop Infinito"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Ao final do semestre, os resultados esperados incluem a produção
              de relatórios de acompanhamento, avaliações diagnósticas e um
              compilado de exercícios resolvidos e discutidos no grupo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectLoop;