import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  

  return (
    <div
      className="max-w-4xl mx-auto"
     
    >
      <div className="group pl-10 rounded-xl overflow-hidden shadow-lg relative w-[21rem] h-[16rem] sm:w-[30rem] sm:h-[18rem] md:w-[38rem] md:h-[22rem] lg:w-[44rem] lg:h-[28rem] xl:w-[52rem] xl:h-[33rem] 2xl:w-[56rem] 2xl:h-[37rem]">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        
        <div className="hidden group-hover:flex ml-10 rounded-xl absolute top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-70 px-10">
          <div className="text-white text-center p-4 mr-8">
            <h3 className="text-sm lg:text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 mb-2 text-xs lg:text-md xl:text-lg">{description}</p>
            <Link href={gitUrl} passHref target="_blank">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                <div className="flex items-center justify-center gap-2 text-sm lg:text-lg">
                  <LinkIcon className="h-6 w-6" />
                  Visit Project
                </div>
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
