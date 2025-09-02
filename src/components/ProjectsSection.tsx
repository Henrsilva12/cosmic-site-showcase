import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import projectLoop from "@/assets/loop1.jpg";
import projectGameOn from "@/assets/gameon2.png";
import projectExpo from "@/assets/roboX.png";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-background" id="projetos">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-foreground font-heading"
          data-aos="fade-up"
        >
          Projetos
        </h2>

        <Card
          className="bg-section-gradient text-white rounded-[20px] overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-3xl font-bold mb-6"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Explore nossos projetos
                </h3>
                <p
                  className="text-gray-200 mb-6 leading-relaxed text-justify"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Nesta seção, você encontrará os projetos desenvolvidos e
                  acompanhados pelos estudantes e professores do curso de
                  Bacharelado em Sistemas de Informação (BSI). Cada iniciativa
                  reflete o compromisso com a prática, a inovação e o impacto
                  social, envolvendo temas como tecnologia, educação,
                  sustentabilidade, robótica, redes e desenvolvimento de
                  software.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300"
                  style={{ color: "#F6BE9A" }}
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="col-span-2"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <Link to="/project-loop">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <img
                        src={projectLoop}
                        alt="Projeto Loop Infinito"
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Card>
                  </Link>
                </div>

                <Link to="/project-game-on">
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img
                      src={projectGameOn}
                      alt="Projeto do GameOn"
                      className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Card>
                </Link>

                <Link to="/eventos-exposicao">
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <img
                      src={projectExpo}
                      alt="Projeto de Robótica na Exposição"
                      className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Card>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;