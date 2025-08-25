import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/ea4a0ce6-6008-4039-a58d-8eb782c9a48d.png" alt="Portal da ESI Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300">
              Compartilhando conhecimento e construindo o futuro da tecnologia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 mt-1">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Política de Privacidade</li>
              <li>Termos e condições</li>
            </ul>
          </div>
          
          <div>
            <div className="space-y-4">
              <Button className="w-full bg-white text-primary hover:bg-sky-200">
                Enviar mensagem
              </Button>
              <Button variant="outline" className="w-full text-primary border-white hover:bg-sky-200 hover:text-primary">
                Relatar problemas
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center text-gray-300">
          <p>Copyright © 2025 Portal de BSI</p>
        </div>
      </div>
    </footer>;
};
export default Footer;