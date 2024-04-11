"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Timeline from "./components/WorkSection";
import ParticlesContainer from "./components/ParticlesContainer";
import { FaCarAlt, FaUniversity, FaMoneyBill } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import PropagateLoader from "react-spinners/PropagateLoader";


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
      date: "Mar 2024 - Present",
      description:
        "Founder of WatGPT design team. Currently leading a team of 6 to build ML models and automate course recommendation processes for the entire Faculty of Engineering.",
      icon: "/images/companies/watgpt.png",
    },
    {
      role: "Software Engineer Intern",
      company: "Northbridge Financial Corp.",
      date: "May 2023 - August 2023",
      description:
        "Developed insurance solutions catering to customer base of over 10,000+ users",
      icon: "/images/companies/nbfc.png",
    },
    {
      role: "Machine Learning Researcher",
      company: "Wat.AI - UWaterloo Artificial Intelligence Team",
      date: "March 2023 - December 2023",
      description:
        "Created a sound anomaly detection system with Transformer models",
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

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto">
      <ParticlesContainer onParticlesLoaded={handleParticlesLoaded} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PropagateLoader
          // white color
            color="#fff"     
            loading={loading}
            size={20}
          />
        </div>
      ):
      (
        <>
          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <HeroSection style={{ zIndex: 10 }} /> {/* Set higher zIndex */}
          </div>

          <div
            className
            style={{
              background:
                "radial-gradient(rgba(27, 27, 27, 0.9),rgba(27, 27, 27, 0.9))",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/5 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
            <div className="container mt-24 mx-auto px-2 md:px-12 py-4">
              <AboutSection />
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
              <Timeline experiences={experiences} />
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
            <ProjectsSection />
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
              <EmailSection />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
