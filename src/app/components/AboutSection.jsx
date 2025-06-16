"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const subHeadingStyles = {
    fontWeight: "600",
  };
  const paragraphStyle = {
    fontWeight: "400",
    color: "rgba(234, 234, 234, 1)",
  };

  return (
    <section
      className="text-white xl:min-h-[530px] 2xl:min-h-[560px]"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.7 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-1 sm:py-16 xl:px-16 xl:py-9">
          <div className="rounded-xl overflow-hidden relative">
            {/* Adjusted width and height */}
            <Image
              src="/images/speddi.png"
              width={400}
              height={300}
              className="w-full h-full rounded-xl border-2 border-black hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 ml-10 xl:ml-20 md:mt-0 text-left flex flex-col h-full pt-8">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans"
              style={subHeadingStyles}
            >
              Hey There!
            </h2>
            <p
              style={paragraphStyle}
              className="text-base lg:text-xl mt-8 font-sans text-wrap text-pretty text-base/loose"
            >
              I am a Software Engineering student at the University of Waterloo.
              I am passionate about building software that solves real-world
              problems. I have interned at various companies, started an AI
              design team at UWaterloo, participated and won hackathons, and
              attended international conferences like Solana Breakpoint.
              I&apos;m currently looking for 2026 internship opportunities. Feel
              free to reach out at srpeddi@uwaterloo.ca.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
