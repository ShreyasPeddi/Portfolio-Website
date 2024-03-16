"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const subHeadingStyles = {
    fontWeight: '600',
  };
  const paragraphStyle = {
    
    fontWeight: '400',
    color: 'rgba(234, 234, 234, 1)',
    
  };
  return (
    <section className="text-white xl:min-h-[530px] 2xl:min-h-[560px]" id="about" >
       <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5}}
            transition={{ duration: 0.7 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-1 sm:py-16 xl:px-16 xl:py-9">
        <div className="rounded-full overflow-hidden">
          <Image src="/images/headshot.jpeg" width={400} height={400} className="w-100 h-100 rounded-full border-2 border-black" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full pt-8">
          <h2 className="text-5xl font-bold text-white mb-4 font-sans" style={subHeadingStyles}>Hey There!</h2>
          <p style = {paragraphStyle} className="text-base lg:text-xl mt-8 font-sans text-wrap text-pretty text-base/loose ">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;