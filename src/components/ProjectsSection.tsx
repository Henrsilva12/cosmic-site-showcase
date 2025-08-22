import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectsBg from "@/assets/projects-bg.jpg";

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Projetos</h2>
        
        <Card className="bg-section-gradient text-white rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Explore nossos projetos</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Neste espaço, você encontra os projetos desenvolvidos e apresentados pelos estudantes e professores do curso de 
                  Sistema de informação. Cada projeto reflete aprendizado e desenvolvimento tecnológico, desde aplicações web, 
                  sistemas de gerenciamento, soluções inovadoras e muito mais. Nossos projetos são uma janela para o conhecimento 
                  prático e teórico que estamos construindo.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Saiba mais →
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={projectsBg} 
                  alt="Projetos de desenvolvimento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;