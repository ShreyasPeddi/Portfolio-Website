"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const subHeadingStyles = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '400',
    color: 'rgba(234, 234, 234, 1)',
  };
  const paragraphStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '400',
    color: 'rgba(234, 234, 234, 1)',
    fontSize: '1.25rem',
  };
  return (
    <section className="text-white xl:min-h-[630px] 2xl:min-h-[660px]" id="about" >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-full overflow-hidden">
          <Image src="/images/headshot.jpeg" width={400} height={400} className="rounded-full border-2 border-black" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full pt-8">
          <h2 className="text-3xl font-bold text-white mb-4" style={subHeadingStyles}>Hey There!</h2>
          <p style = {paragraphStyle} className="text-base lg:text-lg mt-8">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

