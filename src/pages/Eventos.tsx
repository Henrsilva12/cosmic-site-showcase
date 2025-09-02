import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const Eventos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const eventos = [
    {
      id: 1,
      title: "Exposição",
      description:
        "O curso de BSI brilhou com projetos de robótica, automação e sustentabilidade, mostrando como a tecnologia pode ser acessível e transformadora.",
      image: "/src/assets/robotica.png",
      link: "/eventos-exposicao",
    },
    {
      id: 2,
      title: "Campus Party",
      description:
        "Alunos do IF Baiano viveram dias incríveis na Campus Party PE 2024, explorando IA, robótica, games e muito mais. Uma experiência única no maior festival de inovação do país!",
      image: "/src/assets/campus-party.png",
      link: "/eventos-campus-party",
    },
    {
      id: 3,
      title: "Oficina de Crimpagem",
      description:
        "Alunos do BSI dominam crimpagem de cabos em oficina prática de redes. Padrões, testes e muito aprendizado técnico!",
      image: "/src/assets/oficina-crimpagem.png",
      link: "/eventos-oficina-crimpagem",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4">

          <h1
            className="text-4xl font-bold text-center mb-6 text-foreground font-heading"
            data-aos="fade-down"
          >
            Eventos
          </h1>

          <p
            className="text-lg text-foreground text-justify max-w-2xl max-w-full mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Nesta seção, você encontra os principais eventos que marcaram a
            trajetória do curso de Sistemas de Informação do IF Baiano – Campus
            Itapetinga. Desde participações em feiras tecnológicas até oficinas
            práticas e imersões em grandes festivais de inovação, cada evento é
            uma oportunidade de aprendizado, networking e divulgação do que é
            produzido no curso. Clique em cada card para saber mais sobre as
            experiências, fotos e depoimentos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, index) => (
              <Card
                key={evento.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {evento.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-justify flex-grow">
                    {evento.description}
                  </p>

                  <Link to={evento.link} className="block w-full mt-auto">
                    <Button variant="blue" className="w-full group">
                        Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;