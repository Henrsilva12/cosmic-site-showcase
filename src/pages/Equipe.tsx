import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Equipe() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center mb-6 text-foreground font-heading"
            data-aos="fade-down"
          >
            Equipe
          </h1>

          <div className="flex flex-col items-center gap-12">
            <div className="text-lg text-foreground text-justify max-w-2xl max-w-full mx-auto">
              <p data-aos="fade-up" data-aos-delay="100">
                Por trás de cada postagem, entrevista e destaque do curso de
                Sistemas de Informação está uma equipe apaixonada por
                tecnologia, design e comunicação. Somos alunos do BSI que uniram
                forças para criar, organizar e manter este blog com dedicação e
                criatividade.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Nosso objetivo é traduzir o dia a dia do curso em conteúdos
                envolventes, informativos e acessíveis — mostrando como o BSI
                transforma ideias em projetos e conhecimento em impacto.
              </p>
            </div>

            <div className="grid grid-cols-1 w-full gap-16 mt-12">
              <div
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  className="rounded-lg w-full md:w-80 h-64 object-cover mx-auto"
                  src="/src/assets/tavares.png"
                  alt="Amanda Tavares"
                />
                <div className="flex flex-col gap-4 text-base md:text-lg">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                    Amanda Tavares
                  </h1>
                  <p className="text-muted-foreground">
                    Amanda atua como desenvolvedora fullstack do blog, cuidando
                    tanto da parte visual quanto da estrutura funcional do site.
                    Seu olhar técnico e organizado é essencial para garantir uma
                    navegação fluida e segura.
                  </p>
                  <h2 className="font-bold text-foreground">
                    Interesses: Análise de dados, Segurança da Informação, Redes
                    de Computadores e Automação.
                  </h2>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">GitHub:</h1>
                    <a
                      href="https://github.com/amandatsantos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      amandatsantos
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">Contatos:</h1>
                    <a
                      href="https://www.linkedin.com/in/amanda-tavares-santos-ats?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Amanda Tavares
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  className="rounded-lg w-full md:w-80 h-64 object-cover mx-auto"
                  src="/src/assets/Bruno.jpeg"
                  alt="Bruno Flores"
                />
                <div className="flex flex-col gap-4 text-base md:text-lg">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                    Bruno Flores
                  </h1>
                  <p className="text-muted-foreground">
                    Responsável por UX Writing, Bruno é quem transforma os
                    projetos do curso em textos claros, envolventes e
                    acessíveis. É ele quem dá voz e ritmo às postagens,
                    entrevistas e destaques publicados no blog.
                  </p>
                  <h2 className="font-bold text-foreground">
                    Interesses: Front-end, FullStack e Hardware
                  </h2>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">GitHub:</h1>
                    <a
                      href="https://github.com/Buurunu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Buurunu
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">Contatos:</h1>
                    <a
                      href="https://www.linkedin.com/in/bruno-flores-31b021264/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Bruno Flores
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  className="rounded-lg w-full md:w-80 h-64 object-cover mx-auto"
                  src="/src/assets/rick.png"
                  alt="Henrique Santos"
                />
                <div className="flex flex-col gap-4 text-base md:text-lg">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                    Henrique Santos
                  </h1>
                  <p className="text-muted-foreground">
                    Henrique é o designer UI/UX da equipe, responsável por toda
                    a parte visual e experiência do usuário. Sua missão é
                    garantir que o blog seja não só funcional, mas também
                    agradável e intuitivo.
                  </p>
                  <h2 className="font-bold text-foreground">
                    Interesses: UI/UX Desing e Gestão de Software
                  </h2>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">GitHub:</h1>
                    <a
                      href="https://github.com/Henrsilva12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Henrsilva12
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">Contatos:</h1>
                    <a
                      href="https://www.linkedin.com/in/henrique-santtos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Henrique Santos
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  className="rounded-lg w-full md:w-80 h-64 object-cover mx-auto"
                  src="/src/assets/hercules.png"
                  alt="Hércules Silva"
                />
                <div className="flex flex-col gap-4 text-base md:text-lg">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                    Hércules Silva
                  </h1>
                  <p className="text-muted-foreground">
                    Hércules também atua como desenvolvedor fullstack,
                    contribuindo para a criação e sustentação do blog tanto no
                    visual quanto na estrutura. Sua experiência técnica
                    fortalece a base do projeto.
                  </p>
                  <h2 className="font-bold text-foreground">
                    Interesses: Back-end, Arquitetura de Sistemas e Redes de
                    Computadores.
                  </h2>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">GitHub:</h1>
                    <a
                      href="https://github.com/thellllima02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      thellllima02
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">Contatos:</h1>
                    <a
                      href="https://www.linkedin.com/in/hercules-silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Hércules Silva
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img
                  className="rounded-lg w-full md:w-80 h-64 object-cover mx-auto"
                  src="https://i.postimg.cc/63pjh2hG/IMG-20250807-122056-EDIT-1.jpg"
                  alt="Natanael Santos"
                />
                <div className="flex flex-col gap-4 text-base md:text-lg">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                    Natanael Santos
                  </h1>
                  <p className="text-muted-foreground">
                    Como gerente de projetos, Natanael é o responsável por
                    coordenar as entregas, validar o andamento do blog e
                    garantir que tudo esteja funcionando conforme o esperado. É
                    quem dá o "ok final" antes de algo ir ao ar.
                  </p>
                  <h2 className="font-bold text-foreground">
                    Interesses: Front-end e FullStack
                  </h2>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">GitHub:</h1>
                    <a
                      href="https://github.com/natanael-sg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      natanael-sg
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-foreground">Contatos:</h1>
                    <a
                      href="https://br.linkedin.com/in/natanael-dos-santos-gon%C3%A7alves-617011283"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Natanael Gonçalves
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
