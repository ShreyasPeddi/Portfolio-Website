"use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import PropagateLoader from "react-spinners/PropagateLoader";

// Dynamically import components with lazy loading
const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const EmailSection = dynamic(() => import("./components/EmailSection"));
const Timeline = dynamic(() => import("./components/WorkSection"));
const ParticlesContainer = dynamic(() => import("./components/ParticlesContainer"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Gryd",
      date: "Jan 2024 - April 2024",
      description:
        "Developed core features for GrydPark, Canada's first B2C/B2B Parking Marketplace and Management Platform",
      icon: "/images/companies/gryd.jpeg",
    },
    {
      role: "Machine Learning Researcher",
      company: "University of Waterloo, Dean's Office (WatGPT project)",
      date: "Mar 2024 - Present",
      description:
        "Building ML models to automate course recommendation processes for the entire Faculty of Engineering.",
      icon: "/images/companies/uwaterloo.png",
    },
    {
      role: "Founder",
      company: "WatGPT - UWaterloo's Generative AI team",
      date: "Sept 2023 - Present",
      description:
        "Leading teams to build LLMs and AI tools, improving student and faculty experiences at UWaterloo.",
      icon: "/images/companies/watgpt.png",
    },
    {
      role: "Software Engineer Intern",
      company: "Northbridge Financial Corp.",
      date: "May 2023 - August 2023",
      description:
        "Developed insurance solutions catering to a customer base of over 10,000+ users.",
      icon: "/images/companies/nbfc.png",
    },
    {
      role: "Machine Learning Engineer",
      company: "Wat.AI - UWaterloo Artificial Intelligence Team",
      date: "March 2023 - December 2023",
      description:
        "Created a sound anomaly detection system with Transformer models.",
      icon: "/images/companies/watai.jpeg",
    },
    {
      role: "Software Developer Intern",
      company: "DataReady Technology",
      date: "June 2021 - August 2021",
      description:
        "Worked on the SmartSchool platform, a SaaS product for schools and universities",
      icon: "/images/companies/dataready.png",
    },
  ];

  const handleParticlesLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Fallback after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <ParticlesContainer onParticlesLoaded={handleParticlesLoaded} />
      </Suspense>
      
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PropagateLoader
            color="#fff"
            loading={loading}
            size={20}
          />
        </div>
      ) : (
        <>
          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Suspense fallback={<div>Loading...</div>}>
              <HeroSection style={{ zIndex: 10 }} />
            </Suspense>
          </div>

          <div
            style={{
              background:
                "radial-gradient(rgba(27, 27, 27, 0.9),rgba(27, 27, 27, 0.9))",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="container mt-24 mx-auto px-2 md:px-12 py-4">
              <Suspense fallback={<div>Loading...</div>}>
                <AboutSection />
              </Suspense>
            </div>
          </div>

          <div
            style={{
              background:
                "radial-gradient(rgba(18, 18, 18, 0.9),rgba(18, 18, 18, 0.9))",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="container mt-30 mb-24 py-10 mx-auto px-6 md:px-12">
              <Suspense fallback={<div>Loading...</div>}>
                <Timeline experiences={experiences} />
              </Suspense>
            </div>
          </div>

          <div
            style={{
              background:
                "radial-gradient(rgba(27, 27, 27, 0.9),rgba(27, 27, 27, 0.9))",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="mt-28 mb-20 mx-auto py-4">
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectsSection />
              </Suspense>
            </div>
          </div>

          <div
            style={{
              background:
                "radial-gradient(rgba(18, 18, 18, 0.1),rgba(18, 18, 18, 0.1))",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="container mt-24 mx-auto px-6 md:px-12 py-4">
              <Suspense fallback={<div>Loading...</div>}>
                <EmailSection />
              </Suspense>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
