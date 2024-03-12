"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.jpeg";
import Image from "next/image";

const HeroSection = () => {
  const sectionStyles = {
    backgroundImage: `url(/images/desktop_bg3.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  
  const headingStyles = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
  };

  const subHeadingStyles = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
    fontSize: '1.75rem',
  };

  return (
    <section className="lg:py-12 xl:min-h-[830px] 2xl:min-h-[960px]" >

       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/5 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      
      <div className="grid grid-cols-1 sm:grid-cols-12 py-20 px-16">
        <div className="col-span-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 style = {headingStyles} className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal">
              <br />
              I'm Shreyas Peddi.
            </h1>
            <p style = {subHeadingStyles} className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Software Engineering @ University of Waterloo
            </p>
            <div className="socials flex flex-row gap-2 sm:justify-center lg:justify-start">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
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
