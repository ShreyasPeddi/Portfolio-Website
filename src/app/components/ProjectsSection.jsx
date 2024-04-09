"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";
import { useDrag } from "react-use-gesture";
import { motion, useTransform, useScroll } from "framer-motion";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Solana Rewards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pien, non fermentum ex interdum eget. ",
    image: "/images/projects/SolanaRewards.png",
    gitUrl: "https://devpost.com/software/solana-rewards",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Liber: Hands-Free Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, est quis mattis lobortis, tortor leo sodales libero, interdum eleifend turpis ipsum vitae sem. Mauris ullamcorper dui sapien, non fermentum ex interdum eget. Nam libero est, hendrerit eu sodales quis, iaculis eu risus. Nulla condimentum ex est, vel posuere nulla accumsan a. Nulla vel ex sed dolor porttitor faucibus eu vitae mi. Vestibulum eu laoreet nisi. Mauris volutpat mauris vel pulvinar gravida. Duis dignissim eget justo vel euismod. Proin erat justo, imperdiet et venenatis at, dignissim eget eros. Maecenas commodo mauris ac sapien sollicitudin hendrerit. Proin elementum, tortor hendrerit vulputate tempus, nisi felis hendrerit ligula, in rutrum ipsum augue ac lectus. Vestibulum finibus neque ut odio finibus, eu pulvinar odio sollicitudin. Phasellus quis nulla at odio auctor rhoncus. Nam condimentum accumsan efficitur. Quisque auctor nec ante eu facilisis.",
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

  const filteredProjects = projectsData;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleDrag = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity }) => {
      if (down) {
        const scrollSpeed = 0.4;
        ref.current.scrollLeft -= mx * scrollSpeed;
      }
    },
    {
      axis: "x", // Enable horizontal panning
    }
  );

  return (
    <section className="xl:min-h-[600px] 2xl:min-h-[660px]" id="projects">
      {/* <div className="overflow-x-auto snap-x flex gap-10 xl:gap-20" style={{ overflowX: "hidden" }} ref={ref}>
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
        </div> */}
      <HorizontalScrollCarousel />
    </section>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
          My Projects
        </h2>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {projectsData.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                />
              );
            })}
          </motion.div>
        </div>
      
    </section>
  );
};

export default ProjectsSection;
