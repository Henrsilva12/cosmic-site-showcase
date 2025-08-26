import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/ea4a0ce6-6008-4039-a58d-8eb782c9a48d.png" 
                alt="Portal da BSI Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-300">
              Compartilhando conhecimento e construindo o futuro da tecnologia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 mt-1">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</li>
              <li className="hover:text-white cursor-pointer transition-colors">Termos e condições</li>
            </ul>
          </div>
          
          <div>
            <div className="space-y-4">

              <button className="w-full bg-white text-gray-800 hover:bg-sky-200 hover:text-gray-900 transition-colors py-2 px-4 rounded-md font-medium">
                Enviar mensagem
              </button>
              
              <button className="w-full bg-red-600 text-white hover:bg-red-700 hover:text-white transition-colors py-2 px-4 rounded-md font-medium">
                Relatar problemas
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center text-gray-300">
          <p>Copyright © 2025 Portal de BSI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;