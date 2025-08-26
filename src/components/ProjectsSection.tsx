import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import projectMedium from "@/assets/project-medium.jpg";
import projectSmall1 from "@/assets/project-small-1.jpg";
import projectSmall2 from "@/assets/project-small-2.jpg";
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
                  Nesta seção, você encontrará os projetos desenvolvidos e acompanhados pelos estudantes e professores do curso de Bacharelado em Sistemas de Informação (BSI). Cada iniciativa reflete o compromisso com a prática, a inovação e o impacto social, envolvendo temas como tecnologia, educação, sustentabilidade, robótica, redes e desenvolvimento de software.
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300"
                  style={{ color: '#F6BE9A' }}
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
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img 
                      src={projectMedium} 
                      alt="Projeto principal de desenvolvimento" 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </Card>
                </div>
                
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img 
                    src={projectSmall1} 
                    alt="Projeto de aplicativo móvel" 
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </Card>
              
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img 
                    src={projectSmall2} 
                    alt="Projeto de desenvolvimento web" 
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;