"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useDrag } from "react-use-gesture";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Solana Rewards",
    description: "Project 1 description",
    image: "/images/projects/SolanaRewards.png",
    gitUrl: "https://devpost.com/software/solana-rewards",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Liber: Hands-Free Social Media",
    description: "Project 2 description",
    image: "/images/projects/Liber.png",
    gitUrl: "https://devpost.com/software/liber-hands-free",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blockaoke: Blockchain + Karaoke",
    description: "Project 3 description",
    image: "/images/projects/Blockaoke.png",
    gitUrl: "https://ethglobal.com/showcase/blockaoke-unsoh",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Guido: Autonomous Vacuum Cleaner",
    description: "Project 4 description",
    image: "/images/projects/Guido.jpg",
    gitUrl: "https://github.com/ShreyasPeddi/Guido_SE101",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Virtual Screening of Bioassay Data",
    description: "Authentication and CRUD operations",
    image: "/images/projects/fractal.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/pharmahacks2023-submission",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fractal Patterns",
    description: "Project 5 description",
    image: "/images/projects/fractal.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Fractal-Patterns",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Notivity",
    description: "Project 5 description",
    image: "/images/projects/notivity.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Notivity",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Labyrinth Board Game",
    description: "Project 5 description",
    image: "/images/projects/notivity.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Labyrinth-Board-Game",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const filteredProjects = projectsData

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleDrag = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity }) => {
      if (down) {
       
        const scrollSpeed = 0.2; 
        ref.current.scrollLeft -= mx * scrollSpeed;
      }
    },
    {
      axis: "x", // Enable horizontal panning
    }
  );

  const handleScrollLeft = () => {
   
    var scrollAmount = 330;
    if (window.innerWidth < 768) {scrollAmount = 240;}
    ref.current.scrollTo({
      left: ref.current.scrollLeft - scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleScrollRight = () => {
    var scrollAmount = 330;
    if (window.innerWidth < 768) {scrollAmount = 240;}
    ref.current.scrollTo({
      left: ref.current.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="xl:min-h-[600px] 2xl:min-h-[660px]" id="projects" {...handleDrag()}>
      <h2 className="text-center text-5xl font-bold text-white mb-8 md:mb-16">
        My Projects
      </h2>
      <div className="flex justify-center items-center">
        <div className="pr-10">
          <FaArrowLeft className="cursor-pointer w-5 h-5 xl:w-7 xl:h-7" onClick={handleScrollLeft} />
        </div>
        
        <div className="overflow-x-auto snap-x flex gap-10 xl:gap-20" style={{ overflowX: "hidden" }} ref={ref}>
          {filteredProjects.map((project, index) => (
            <div key = {project.id} className="scroll-ml-6 flex-none w-full xl:w-1/2 2xl:w-2/5">
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </div>
          ))}
        </div>
        <div className="pl-10">
        <FaArrowRight className="cursor-pointer w-5 h-5 xl:w-7 xl:h-7" onClick={handleScrollRight} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;