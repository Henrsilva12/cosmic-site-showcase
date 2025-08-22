import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Button variant="ghost" className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button variant="ghost" className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight className="w-8 h-8" />
          </Button>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={heroTeam} 
              alt="Equipe de desenvolvedores trabalhando juntos" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;