import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EventsSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
