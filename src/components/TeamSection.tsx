import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Equipe</h2>
        
        <Card className="bg-section-gradient text-white rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={teamPhoto} 
                  alt="Equipe Portal da ESI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Por trás de cada postagem, há entusiasmo e dedicação de nossos membros em espalhar conhecimento.</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Nosso objetivo é criar um conteúdo diversificado, importante e educativo sobre a área que amamos. Juntos desenvolvemos este projeto de contribuir com uma iniciativa.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary self-start">
                  Conheça a equipe →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;