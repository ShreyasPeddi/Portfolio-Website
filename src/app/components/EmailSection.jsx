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
          <h1 className="mt-20 text-2xl text-[#ADB7BE] mb-4 font-sans">
            Get in Touch
          </h1>
          <h2 className="text-5xl font-bold text-white mb-4 font-sans">
            Contact Me
          </h2>
        </div>
        
      <div className="bg-gray-200 p-6 xl:p-8 mt-10 rounded-full border border-radius border-gray-300">
        <div className="flex flex-row gap-2 justify-center md:justify-start">
            <div className="pl-2"></div>
            <Link href="email.com">
              <Image src={EmailDarkIcon} width={65} alt="Email Icon" className="w-11 h-10 pt-2 pl-1"  />
            </Link>
            <h2 className="text-black mt-2 text-2xl pl-2">
              srpeddi@uwaterloo.ca
            </h2>
            <div className="pl-5"></div>
            <Link href="linkedin.com">
              <Image src={LinkedinDarkIcon} width={45} alt="Linkedin Icon" />
            </Link>
            <h2 className="text-black mt-2 text-2xl pr-2">
              LinkedIn
            </h2>
            
        </div>
      </div>
    </div>
    </section>
  );
};

export default EmailSection;
