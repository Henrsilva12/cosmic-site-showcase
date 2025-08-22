import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary-gradient text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">ESI</span>
            </div>
            <span className="text-xl font-bold">Portal da ESI</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-200 transition-colors">Home</a>
            <a href="#blog" className="hover:text-gray-200 transition-colors">Blog</a>
            <a href="#projetos" className="hover:text-gray-200 transition-colors">Projetos</a>
            <a href="#eventos" className="hover:text-gray-200 transition-colors">Eventos</a>
            <a href="#equipe" className="hover:text-gray-200 transition-colors">Equipe</a>
            <a href="#contato" className="hover:text-gray-200 transition-colors">Contato</a>
          </nav>
          
          <Button variant="ghost" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;