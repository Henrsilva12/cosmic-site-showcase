import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import projectMedium from "@/assets/project-medium.jpg";
import projectSmall1 from "@/assets/project-small-1.jpg";
import projectSmall2 from "@/assets/project-small-2.jpg";
const ProjectsSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">Projetos</h2>
        
        <Card className="bg-section-gradient text-white rounded-[20px] overflow-hidden shadow-2xl">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 font-heading">Explore nossos projetos</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-justify">Nesta seção, você encontrará os projetos desenvolvidos e acompanhados pelos estudantes e professores do curso de Bacharelado em Sistemas de Informação (BSI). Cada iniciativa reflete o compromisso com a prática, a inovação e o impacto social, envolvendo temas como tecnologia, educação, sustentabilidade, robótica, redes e desenvolvimento de software.</p>
                <a href="/projetos" className="inline-flex items-center font-medium hover:underline transition-all duration-300" style={{
                color: '#F6BE9A'
              }}>
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src={projectMedium} alt="Projeto principal de desenvolvimento" className="w-full h-48 object-cover" />
                  </Card>
                </div>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={projectSmall1} alt="Projeto de aplicativo móvel" className="w-full h-32 object-cover" />
                </Card>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={projectSmall2} alt="Projeto de desenvolvimento web" className="w-full h-32 object-cover" />
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ProjectsSection;