import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Calendar,
  User,
  Github,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const ProjectRobotica = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/src/assets/car1.png",
    "/src/assets/car2.png",
    "/src/assets/car3.png",
    "/src/assets/car4.png",
    "/src/assets/car5.png",
  ];

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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Publicada em 24/08/2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-semibold">por Henrique Santos</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-6">
              Robótica na Prática
            </h1>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              A robótica entrou em cena de forma lúdica e educativa no projeto
              Introdução à Robótica e Automação com Arduino, realizado na Escola
              Noralice e posteriormente demonstrado na exposição 2023. A ação
              foi voltada para crianças, que puderam interagir com kits de
              Arduino e entender, na prática, como a automação está presente no
              nosso dia a dia.
            </p>

            <img
              src="/src/assets/robotica1.png"
              alt="Projeto Robótica"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <p className="text-lg leading-relaxed text-foreground mb-6">
              Embora nossa equipe tenha ficado mais na observação — assistindo
              os pequenos explorarem os circuitos com empolgação — o momento foi
              essencial para perceber como a tecnologia pode ser inserida desde
              cedo no ambiente escolar de maneira leve e divertida.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-6">
              As fotos desse dia mostram o brilho nos olhos das crianças ao se
              depararem com os sensores, LEDs e motores, provando que, com a
              abordagem certa, aprender pode ser tão empolgante quanto brincar.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-foreground">
              Galeria do Projeto
            </h2>

            <div className="relative bg-muted/30 rounded-lg p-4">
              <div className="flex justify-center items-center">
                <img
                  src={images[currentImage]}
                  alt={`Projeto Robótica ${currentImage + 1}`}
                  className="w-full max-w-2xl h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>


              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all border border-border"
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

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Contatos
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                <a
                  href="https://github.com/loop-infinito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  GitHub do Projeto
                </a>
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
