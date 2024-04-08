"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import LinkedinDarkIcon from "../../../public/linkedin_dark.png";
import EmailDarkIcon from "../../../public/email_dark.png";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="text-center py-24 xl:min-h-[730px] 2xl:min-h-[860px]"
    >
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-md lg:text-xl xl:mt-20 xl:text-2xl text-[#ADB7BE] mb-4 font-sans">
            Get in Touch
          </h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-sans">
            Contact Me
          </h2>
        </div>

        <div className="bg-gray-200 p-2 md:p-3 xl:p-8 mt-10 xl:w-90 rounded-3xl border border-radius border-gray-300 opacity-100">
          <div className="flex flex-col xl:flex-row gap-2 justify-center md:justify-start">
            <div className="pl-2"></div>
            <div className="md:pt-2 flex flex-row gap-2 px-10 xl:px-0">
              <Link href="mailto:srpeddi@uwaterloo.ca">
                <Image
                  src={EmailDarkIcon}
                  width={50}
                  alt="Email Icon"
                  className="w-8 h-13 md:w-10 md:h-13 py-2"
                />
              </Link>
            
              <h2 className="text-black mt-2 lg:text-xl xl:text-2xl pl-2">
                srpeddi@uwaterloo.ca
              </h2>

            </div>

            <div className="xl:pl-5"></div>
            <div className="md:pt-2 flex flex-row gap-2 justify-center">
              <Link href="https://www.linkedin.com/in/shreyaspeddi/" target="_blank">
                <Image
                  className="w-3/4 md:w-full"
                  src={LinkedinDarkIcon}
                  width={45}
                  alt="Linkedin Icon"
                />
              </Link>
              <h2 className="text-black mt-2 lg:text-xl xl:text-2xl pr-2">
                LinkedIn
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
