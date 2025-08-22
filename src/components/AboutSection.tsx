import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Radio } from "lucide-react";
import itCampusBg from "@/assets/it-campus-bg.jpg";
import academicCenterBg from "@/assets/academic-center-bg.jpg";
import radioBg from "@/assets/radio-bg.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">Sobre</h2>
        
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-muted-foreground text-justify max-w-4xl mx-auto">
            Bem-vindos ao nosso espaço dedicado à comunidade ESI (Engenharia de Sistemas de Informação). Aqui, compartilhamos conhecimentos, 
            projetos e experiências que moldam o futuro da tecnologia. Nossa missão é conectar estudantes, professores e profissionais, 
            criando um ambiente colaborativo de aprendizado e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${itCampusBg})` }}
            >
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">IT Bahia Campus Pitágoras</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 text-justify">
                Comunidade tecnológica do campus focada em desenvolvimento de habilidades e networking profissional.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('#', '_blank')}
              >
                <Globe className="w-4 h-4 mr-2" />
                Acessar site
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${academicCenterBg})` }}
            >
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">Centro Acadêmico Accra</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 text-justify">
                Representação estudantil que promove eventos, palestras e atividades acadêmicas para o curso.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('#', '_blank')}
              >
                <Users className="w-4 h-4 mr-2" />
                Acessar site
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${radioBg})` }}
            >
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">Rádio Diga+</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 text-justify">
                Plataforma de comunicação estudantil que divulga notícias, eventos e conteúdo educativo.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('#', '_blank')}
              >
                <Radio className="w-4 h-4 mr-2" />
                Acessar site
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;