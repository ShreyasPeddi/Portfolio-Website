import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" style={{ background: "linear-gradient(rgba(20, 20, 20, 0.8), rgba(20, 20, 30, 0.5))", backgroundSize: "cover", position: "relative" }}>
       
      <HeroSection />
      
      <div style={{ background: "radial-gradient(rgba(90, 90, 90, 0.4), rgba(40, 0, 10, 0.1))", backgroundSize: "cover", position: "relative" }}>
        <div className="container mt-24 mx-auto px-12 py-4">
          <AboutSection />
        </div>
      </div>

      <div style={{ background: "radial-gradient(rgba(20, 20, 20, 0.8), rgba(20, 20, 30, 0.5))", backgroundSize: "cover", position: "relative" }}>
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectsSection />
        </div>
      </div>

      <div style={{ background: "radial-gradient(rgba(90, 90, 90, 0.4), rgba(40, 0, 10, 0.1))", backgroundSize: "cover", position: "relative" }}>
        <div className="container mt-24 mx-auto px-12 py-4">
          <EmailSection />
        </div>
      </div>
      
    </main>
  );
}
