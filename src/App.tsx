import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from "@/components/ModalProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectLoop from "./pages/ProjectLoop";
import ProjectGameOn from "./pages/ProjectGameOn";
import ProjectRobotica from "./pages/ProjectRobotica";
import ProjectRecicla from "./pages/ProjectRecicla";
import Eventos from "./pages/Eventos";
import Exposicao from "./pages/ProjectExposicao";
import CampusParty from "./pages/EventCampusParty";
import Crimpagem from "./pages/EventCrimpagem";
import Equipe from "./pages/Equipe";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-loop" element={<ProjectLoop />} />
            <Route path="/project-game-on" element={<ProjectGameOn />} />
            <Route path="/project-robotica" element={<ProjectRobotica />} />
            <Route path="/project-recicla" element={<ProjectRecicla />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos-exposicao" element={<Exposicao />} />
            <Route path="/eventos-campus-party" element={<CampusParty />} />
            <Route path="/eventos-oficina-crimpagem" element={<Crimpagem />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </ModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
};

export default App;
