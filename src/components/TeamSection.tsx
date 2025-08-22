import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
const TeamSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">Equipe</h2>
        
        <Card className="bg-section-gradient text-white rounded-2xl overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img src={teamPhoto} alt="Equipe Portal da ESI" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Por trás de cada postagem, entrevista e destaque do curso de Sistemas de Informação está uma equipe apaixonada por tecnologia, design e comunicação.</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-justify">Nosso objetivo é traduzir o dia a dia do curso em conteúdos envolventes, informativos e acessíveis — mostrando como o BSI transforma ideias em projetos e conhecimento em impacto.</p>
                <a href="/equipe" className="inline-flex items-center font-medium hover:underline transition-all duration-300 self-start" style={{
                color: '#F6BE9A'
              }}>
                  Conheça a equipe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default TeamSection;