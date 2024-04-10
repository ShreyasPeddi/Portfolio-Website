"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";
import { useDrag } from "react-use-gesture";
import { motion, useTransform, useScroll } from "framer-motion";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import EmblaCarousel from "./EmblaCarousel";



const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

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
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
        My Projects
      </h2>
      {/* <HorizontalScrollCarousel /> */}
      
      <EmblaCarousel/>
    </section>
  );
};

export default ProjectsSection;
