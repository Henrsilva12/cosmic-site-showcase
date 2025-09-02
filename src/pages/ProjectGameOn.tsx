import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectGameOn = () => {
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
            Game On
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
              O projeto Game On: Aprendendo a Programar levou a tecnologia
              diretamente para as salas de aula em Itapetinga, unindo ensino e
              diversão por meio da criação de jogos. A proposta foi simples, mas
              poderosa: despertar o interesse de jovens pela programação, usando
              o desenvolvimento de games como porta de entrada.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/gameon1.png"
                    alt="Game On"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A equipe visitou escolas da cidade, realizando oficinas práticas
              com foco em raciocínio lógico, resolução de problemas e
              criatividade. Além disso, os participantes tiveram contato direto
              com Python, uma das linguagens mais populares do mundo, ideal para
              iniciantes e essencial no mercado de trabalho atual.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/gameon2.png"
                    alt="Game On - Oficina prática"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              As fotos tiradas por Arthur, Bruno e Emanuel mostram o engajamento
              dos alunos e o impacto positivo da iniciativa. Ao final, o projeto
              deixou um legado: uma nova geração de estudantes mais conectada
              com a tecnologia e com o potencial de transformar ideias em
              soluções reais.
            </p>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contatos</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                <a
                  href="https://github.com/Geovannalves/curso-python-extensao"
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

export default ProjectGameOn;