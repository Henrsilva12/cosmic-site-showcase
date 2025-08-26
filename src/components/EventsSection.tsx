import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import { Link } from "react-router-dom";

const EventsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-foreground font-heading"
          data-aos="fade-up"
        >
          Eventos
        </h2>

        <Card
          className="bg-section-gradient text-white rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="font-bold mb-6 text-3xl"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Participe dos nossos eventos
                </h3>
                <p
                  className="text-gray-200 mb-6 leading-relaxed text-justify"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Fique por dentro de todos os eventos, workshops, palestras e
                  atividades que acontecem no curso de Sistemas de Informação.
                  Nossos eventos são oportunidades únicas para aprendizado,
                  networking e troca de experiências com profissionais da área e
                  outros estudantes.
                </p>
                <Link
                  to="/eventos"
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300"
                  style={{ color: "#F6BE9A" }}
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Card
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <img
                    src={event1}
                    alt="Conferência de Tecnologia"
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Card>

                <Card
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <img
                    src={event2}
                    alt="Workshop de Desenvolvimento"
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Card>

                <Card
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <img
                    src={event3}
                    alt="Hackathon Universitário"
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;
