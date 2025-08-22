import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  return (
    <section className="py-16 bg-section-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Eventos</h2>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Explore nossos eventos</h3>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Neste espaço, você encontra os projetos desenvolvidos e apresentados pelos estudantes e professores do curso de 
              Sistema de Informação. Cada projeto reflete aprendizado e desenvolvimento tecnológico, desde aplicações web, 
              sistemas de gerenciamento, soluções inovadoras e muito mais. Nossos projetos são uma janela para o conhecimento 
              prático e teórico que estamos construindo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="aspect-video bg-white/20 rounded-lg"></div>
              <div className="aspect-video bg-white/20 rounded-lg"></div>
              <div className="aspect-video bg-white/20 rounded-lg"></div>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              Neste espaço, você encontra os projetos desenvolvidos e apresentados pelos estudantes e professores do curso de 
              Sistema de informação. Cada projeto reflete aprendizado e desenvolvimento tecnológico, desde aplicações web, sistemas de gerenciamento, soluções inovadoras e muito mais. Nossos projetos são uma janela para o conhecimento prático e teórico que estamos construindo.
            </p>
            
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Saiba mais →
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;