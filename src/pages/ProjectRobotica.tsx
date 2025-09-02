import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectRobotica = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/src/assets/car1.png",
    "/src/assets/car2.png",
    "/src/assets/car3.png",
    "/src/assets/car4.png",
    "/src/assets/car5.png",
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow py-8 mt-32">
        <div className="container mx-auto px-4">

          <h1
            className="text-4xl font-bold text-center mb-8 text-foreground font-heading"
            data-aos="fade-down"
          >
            Robótica na Prática
          </h1>

          <div className="mb-12" data-aos="fade-up">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Publicada em 24/08/2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-semibold">por Henrique Santos</span>
              </div>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              A robótica entrou em cena de forma lúdica e educativa no projeto
              Introdução à Robótica e Automação com Arduino, realizado na Escola
              Noralice e posteriormente demonstrado na exposição 2023. A ação
              foi voltada para crianças, que puderam interagir com kits de
              Arduino e entender, na prática, como a automação está presente no
              nosso dia a dia.
            </p>

            <div className="flex justify-center mb-6">
              <Card className="overflow-hidden max-w-4xl">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src="/src/assets/robotica1.png"
                    alt="Projeto Robótica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              Embora nossa equipe tenha ficado mais na observação — assistindo
              os pequenos explorarem os circuitos com empolgação — o momento foi
              essencial para perceber como a tecnologia pode ser inserida desde
              cedo no ambiente escolar de maneira leve e divertida.
            </p>

            <p className="text-lg text-foreground text-justify mb-6 leading-relaxed">
              As fotos desse dia mostram o brilho nos olhos das crianças ao se
              depararem com os sensores, LEDs e motores, provando que, com a
              abordagem certa, aprender pode ser tão empolgante quanto brincar.
            </p>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
              Galeria do Projeto
            </h2>

            <div className="relative bg-muted/30 rounded-lg p-4">
              <div className="flex justify-center items-center">
                <Card className="overflow-hidden max-w-2xl">
                  <img
                    src={images[currentImage]}
                    alt={`Projeto Robótica ${currentImage + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </Card>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-primary scale-110"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-center mt-2 text-sm text-muted-foreground">
                {currentImage + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectRobotica;