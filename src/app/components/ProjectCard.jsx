import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="rounded-xl overflow-hidden shadow-lg relative w-[21rem] h-[16rem] sm:w-[30rem] sm:h-[18rem] md:w-[38rem] md:h-[22rem] lg:w-[44rem] lg:h-[28rem] xl:w-[52rem] xl:h-[33rem] 2xl:w-[56rem] 2xl:h-[37rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
      >
        <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-t-xl" />
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 px-10">
            <div className="text-white text-center p-4">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-2">{description}</p>
              <Link href={gitUrl} passHref>
                <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <div className="flex items-center justify-center gap-2"> 
                  <LinkIcon className="h-6 w-6" />
                  Visit Project
                  </div>
                  
                </span>
              </Link>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ProjectCard;
