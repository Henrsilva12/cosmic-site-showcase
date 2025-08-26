import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary-gradient text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ea4a0ce6-6008-4039-a58d-8eb782c9a48d.png" 
              alt="Portal da BSI" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <a href="#blog" className="hover:text-sky-400 transition-colors">Blog</a>
            <Link to="/projects" className="hover:text-sky-400 transition-colors">Projetos</Link>
            <a href="#eventos" className="hover:text-sky-400 transition-colors">Eventos</a>
            <Link to="/equipe" className="hover:text-sky-400 transition-colors">Equipe</Link>
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