import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github, Mail } from "lucide-react";

const ProjectGameOn = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-8 mt-32">
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

            <h1 className="text-4xl font-bold text-foreground mb-6">Game On</h1>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              O projeto Game On: Aprendendo a Programar levou a tecnologia
              diretamente para as salas de aula em Itapetinga, unindo ensino e
              diversão por meio da criação de jogos. A proposta foi simples, mas
              poderosa: despertar o interesse de jovens pela programação, usando
              o desenvolvimento de games como porta de entrada.
            </p>

            <img
              src="/src/assets/gameon1.png"
              alt="Game On"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <p className="text-lg leading-relaxed text-foreground mb-6">
              A equipe visitou escolas da cidade, realizando oficinas práticas
              com foco em raciocínio lógico, resolução de problemas e
              criatividade. Além disso, os participantes tiveram contato direto
              com Python, uma das linguagens mais populares do mundo, ideal para
              iniciantes e essencial no mercado de trabalho atual.
            </p>

            <img
              src="/src/assets/gameon2.png"
              alt="Loop Infinito"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <p className="text-lg leading-relaxed text-foreground mb-6">
              As fotos tiradas por Arthur, Bruno e Emanuel mostram o engajamento
              dos alunos e o impacto positivo da iniciativa. Ao final, o projeto
              deixou um legado: uma nova geração de estudantes mais conectada
              com a tecnologia e com o potencial de transformar ideias em
              soluções reais.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contatos</h2>
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
