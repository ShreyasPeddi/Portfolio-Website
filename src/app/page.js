import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Timeline from "./components/WorkSection";

export default function Home() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Gryd",
      date: "Jan 2024 - April 2024",
      description: "Worked on GrydPark, Canada's first B2C/B2B Parking Marketplace and Management Platform",
    },
    {
      role: "Machine Learning Research Assistant",
      company: "Univerity of Waterloo, Dean's Office",
      date: "Mar 2024 - Present",
      description: "Developing an AI powered advising system for course recommendations and student advising",
    },
    {
      role: "Software Engineer Intern",
      company: "Northbridge Financial Corp.",
      date: "May 2023 - August 2023",
      description: "Developed insurance and integration solutions catering to customer base of over 10000 users",
    },
    {
      role: "Machine Learning Researcher",
      company: "Wat.AI",
      date: "March 2023 - December 2023",
      description: "Created a sound anomaly detection system with Transformer models",
    },
    {
      role: "Software Developer Intern",
      company: "DataReady Teachnology",
      date: "June 2021 - August 2021",
      description: "Worked on stuff",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto">
      <div
        style={{
          background: "radial-gradient(rgba(20, 20, 20, 1), rgba(20,20,20,1))",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <HeroSection />
      </div>

      <div
        className
        style={{
          background: "radial-gradient(rgba(30, 30, 30, 1), rgba(30,30,30,1))",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/5 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="container mt-24 mx-auto px-12 py-4">
          <AboutSection />
        </div>
      </div>

      <div
        style={{
          background: "radial-gradient(rgba(20, 20, 20, 1), rgba(20,20,20,1))",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
         <div className="container mt-24 mx-auto px-12 py-4">
          <Timeline experiences={experiences} />
        </div>
      </div>

      <div
        style={{
          background: "radial-gradient(rgba(20, 20, 20, 1), rgba(20,20,20,1))",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectsSection />
        </div>
      </div>

      <div
        style={{
          background: "radial-gradient(rgba(30, 30, 30, 1), rgba(30,30,30,1))",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="container mt-24 mx-auto px-12 py-4">
          <EmailSection />
        </div>
      </div>
    </main>
  );
}
