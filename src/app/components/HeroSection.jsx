"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.jpeg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  
  const headingStyles = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
  };

  const subHeadingStyles = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
    color: 'rgba(194, 194, 194, 1)',

  };

  return (
    <section className="xl:min-h-[830px] 2xl:min-h-[960px]" >
      <div className="grid grid-cols-1 sm:grid-cols-12 py-40 px-24">
        <div className="col-span-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 style = {headingStyles} className="text-white mb-4 text-4xl sm:text-5xl lg:pt-20 2xl:pt-24 lg:text-8xl lg:leading-normal">
            
              I'm Shreyas Peddi.
            </h1>
            <h2 style = {subHeadingStyles} className="text-white text-2xl sm:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1000,
                "Guitar Player",
                1000,
                "AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h2>
            
        <div className="flex flex-row gap-4 justify-center md:justify-start pt-8">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="email.com">
            <Image src={EmailIcon} alt="Email Icon" className="w-11 h-10 pt-2 pl-1"  />
          </Link>
        </div>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
