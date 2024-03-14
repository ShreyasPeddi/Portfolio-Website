import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" style={{ background: "linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.5))", backgroundSize: "cover", position: "relative" }}>
       
       <div style={{ background: "radial-gradient(rgba(20, 20, 20, 1), rgba(20,20,20,1))", backgroundSize: "cover", position: "relative" }}>
        
        <HeroSection/>
      </div>
      
      <div style={{ background: "radial-gradient(rgba(30, 30, 30, 1), rgba(30,30,30,1))", backgroundSize: "cover", position: "relative" }}>
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/5 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="container mt-24 mx-auto px-12 py-4">
          <AboutSection />
        </div>
      </div>

      <div style={{ background: "radial-gradient(rgba(20, 20, 20, 1), rgba(20,20,20,1))", backgroundSize: "cover", position: "relative" }}>
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectsSection />
        </div>
      </div>

      <div style={{ background: "radial-gradient(rgba(30, 30, 30, 1), rgba(30,30,30,1))", backgroundSize: "cover", position: "relative" }}>
        <div className="container mt-24 mx-auto px-12 py-4">
          <EmailSection />
        </div>
      </div>
      
    </main>
  );
}
