import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-section-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Sobre</h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed">
            Este blog tem como objetivo apresentar e divulgar tudo que acontece na comunidade ESI como o curso e as oportunidades do mercado. 
            Você vai encontrar desde atividades até dúvidas técnicas sobre a nossa área, e ainda pode contribuir compartilhando o que você 
            sabe através das nossas redes sociais que fazem parte da vivência acadêmica e prática do curso. Um espaço criado para valorizar 
            e compartilhar o que vem sendo permitindo no longo da jornada em Sistemas de Informações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IT Bahia Campus Pitágoras</h3>
              <p className="text-gray-300 mb-4">Centro Acadêmico Accra</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Acessar site
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Centro Acadêmico Accra</h3>
              <p className="text-gray-300 mb-4">Órgão representativo estudantil</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Acessar site
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rádio Diga+</h3>
              <p className="text-gray-300 mb-4">Comunicação estudantil</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
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