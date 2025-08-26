import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12 text-foreground font-heading"
          data-aos="fade-up"
        >
          Equipe
        </h2>
        
        <Card 
          className="bg-section-gradient text-white rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="relative"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img 
                  src={teamPhoto} 
                  alt="Equipe Portal da BSI" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 
                  className="text-3xl font-bold mb-6"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  Por trás de cada postagem, entrevista e destaque do curso de Sistemas de Informação está uma equipe apaixonada por tecnologia, design e comunicação.
                </h3>
                <p 
                  className="text-gray-200 mb-6 leading-relaxed text-justify"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Nosso objetivo é traduzir o dia a dia do curso em conteúdos envolventes, informativos e 
                  acessíveis — mostrando como o BSI transforma ideias em projetos e conhecimento em impacto.
                </p>
                <Link 
                  to="/equipe" 
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300 self-start"
                  style={{ color: '#F6BE9A' }}
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  Conheça a equipe
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;