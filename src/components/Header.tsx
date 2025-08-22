import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-primary-gradient text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ea4a0ce6-6008-4039-a58d-8eb782c9a48d.png" 
              alt="Portal da ESI Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#blog" className="hover:text-sky-400 transition-colors">Blog</a>
            <a href="#projetos" className="hover:text-sky-400 transition-colors">Projetos</a>
            <a href="#eventos" className="hover:text-sky-400 transition-colors">Eventos</a>
            <a href="#equipe" className="hover:text-sky-400 transition-colors">Equipe</a>
            <a href="#contato" className="hover:text-sky-400 transition-colors">Contato</a>
            <ThemeToggle />
          </nav>
          
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" className="text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;