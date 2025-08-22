import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ESI</span>
              </div>
              <span className="text-xl font-bold">Portal da ESI</span>
            </div>
            <p className="text-gray-300">
              Compartilhando conhecimento e construindo o futuro da tecnologia.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">Email: portal@esi.edu.br</p>
            <h4 className="text-lg font-semibold mb-2 mt-6">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Política de Privacidade</li>
              <li>Termos e condições</li>
            </ul>
          </div>
          
          <div>
            <div className="space-y-4">
              <Button className="w-full bg-white text-primary hover:bg-gray-100">
                Enviar mensagem
              </Button>
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-primary">
                Relatar problemas
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
          <p>Copyright © 2024 Portal da ESI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;