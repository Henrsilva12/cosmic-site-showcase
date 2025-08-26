import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectLoop from "./pages/ProjectLoop";
import ProjectGameOn from "./pages/ProjectGameOn";
import ProjectRobotica from "./pages/ProjectRobotica";
import ProjectRecicla from "./pages/ProjectRecicla";
import Equipe from "./pages/Equipe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-loop" element={<ProjectLoop />} />
            <Route path="/project-game-on" element={<ProjectGameOn />} />
            <Route path="/project-robotica" element={<ProjectRobotica />} />
            <Route path="/project-recicla" element={<ProjectRecicla />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
