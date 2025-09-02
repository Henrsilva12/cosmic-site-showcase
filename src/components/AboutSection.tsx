import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Radio } from "lucide-react";
import itCampusBg from "@/assets/if.jpg";
import academicCenterBg from "@/assets/CA.jpeg";
import radioBg from "@/assets/diga+.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16" id="sobre">
      <div className="container mx-auto px-4 mb-12">
        <h2
          className="text-4xl font-bold text-center text-foreground font-heading"
          data-aos="fade-down"
        >
          Sobre
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <Card
          className="bg-section-gradient rounded-[20px] overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardContent className="p-8">
            <div className="mb-10">
              <p
                className="text-lg leading-relaxed text-justify max-w-full text-slate-100"
                data-aos="fade-bottom"
                data-aos-delay="200"
              >
                Este blog tem como proposta registrar e divulgar tudo o que
                acontece no curso de Bacharelado em Sistemas de Informação (BSI)
                do IF Baiano – Campus Itapetinga. Aqui você encontra conteúdos
                sobre projetos, eventos, oficinas, participações externas e
                outras ações que fazem parte da vivência acadêmica e prática do
                curso. Um espaço criado para valorizar e compartilhar o que vem
                sendo construído ao longo da jornada em Sistemas de Informação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-[12px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${itCampusBg})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">
                      IF Baiano Campus Itapetinga
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() =>
                      window.open(
                        "https://www.ifbaiano.edu.br/unidades/itapetinga",
                        "_blank"
                      )
                    }
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Acessar site
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-[12px]"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${academicCenterBg})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">
                      Centro Acadêmico Aurora
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/cabsi.if",
                        "_blank"
                      )
                    }
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Acessar site
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-[12px]"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${radioBg})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">
                      Rádio Diga+
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@RadioDigaMais",
                        "_blank"
                      )
                    }
                  >
                    <Radio className="w-4 h-4 mr-2" />
                    Acessar site
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
