import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Solana Rewards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pien, non fermentum ex interdum eget. ",
    image: "/images/projects/SolanaRewards.png",
    gitUrl: "https://devpost.com/software/solana-rewards",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Liber: Hands-Free Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, est quis mattis lobortis, tortor leo sodales libero, interdum eleifend turpis ipsum vitae sem. Mauris ullamcorper dui sapien, non fermentum ex interdum eget. Nam libero est, hendrerit eu sodales quis, iaculis eu risus. Nulla condimentum ex est, vel posuere nulla accumsan a. Nulla vel ex sed dolor porttitor faucibus eu vitae mi. Vestibulum eu laoreet nisi. Mauris volutpat mauris vel pulvinar gravida. Duis dignissim eget justo vel euismod. Proin erat justo, imperdiet et venenatis at, dignissim eget eros. Maecenas commodo mauris ac sapien sollicitudin hendrerit. Proin elementum, tortor hendrerit vulputate tempus, nisi felis hendrerit ligula, in rutrum ipsum augue ac lectus. Vestibulum finibus neque ut odio finibus, eu pulvinar odio sollicitudin. Phasellus quis nulla at odio auctor rhoncus. Nam condimentum accumsan efficitur. Quisque auctor nec ante eu facilisis.",
    image: "/images/projects/Liber.png",
    gitUrl: "https://devpost.com/software/liber-hands-free",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blockaoke: Blockchain + Karaoke",
    description: "Project 3 description",
    image: "/images/projects/Blockaoke.png",
    gitUrl: "https://ethglobal.com/showcase/blockaoke-unsoh",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Guido: Autonomous Vacuum Cleaner",
    description: "Project 4 description",
    image: "/images/projects/Guido.jpg",
    gitUrl: "https://github.com/ShreyasPeddi/Guido_SE101",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MedEx",
    description: "Authentication and CRUD operations",
    image: "/images/projects/pharmahacks.png",
    gitUrl: "https://github.com/ShreyasPeddi/pharmahacks2023-submission",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "EQ",
    description:
      "Uni Go is a platform that helps students find the right university for them. It provides a personalized experience for students to find the right university based on their preferences.",
    image: "/images/projects/EQ.png",
    gitUrl: "https://github.com/Vidhi-26/EQ",
    previewUrl: "/",
  },

  

  {
    id: 7,
    title: "Notivity",
    description: "Project 5 description",
    image: "/images/projects/notivity.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Notivity",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Labyrinth Board Game",
    description: "Project 5 description",
    image: "/images/projects/labyrinth.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Labyrinth-Board-Game",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "UniGo",
    description:
      "Uni Go is a platform that helps students find the right university for them. It provides a personalized experience for students to find the right university based on their preferences.",
    image: "/images/projects/notivity.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/UniGO",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Fractal Patterns",
    description: "Project 5 description",
    image: "/images/projects/fractal.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Fractal-Patterns",
    previewUrl: "/",
  },

  
];
const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragThreshold: 10,
  });

  return (
    <section className="">
      <div className="overflow-hidden pt-10 pb-10" ref={emblaRef}>
        <div className="flex">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
