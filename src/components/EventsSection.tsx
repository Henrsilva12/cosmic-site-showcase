import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const EventsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">Eventos</h2>
        
        <Card className="bg-section-gradient text-white rounded-2xl overflow-hidden shadow-2xl">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 font-heading">Participe dos nossos eventos</h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-justify">
                  Aqui você encontra informações sobre workshops, palestras, hackathons e outras atividades que promovemos. 
                  Nossos eventos são oportunidades únicas de networking, aprendizado e desenvolvimento profissional na área de tecnologia.
                </p>
                <a 
                  href="/eventos"
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300"
                  style={{ color: '#F6BE9A' }}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={event1} 
                    alt="Conferência de Tecnologia" 
                    className="w-full h-32 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={event2} 
                    alt="Workshop de Desenvolvimento" 
                    className="w-full h-32 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={event3} 
                    alt="Hackathon Universitário" 
                    className="w-full h-32 object-cover"
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