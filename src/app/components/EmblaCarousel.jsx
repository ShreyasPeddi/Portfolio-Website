import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Solana Rewards",
    description:
      "A web app made entirely on the Solana blockchain. Users can fill out 2-5 minute surveys and earn free NFTs and tokens through airdrops",
    image: "/images/projects/SolanaRewards.png",
    gitUrl: "https://devpost.com/software/solana-rewards",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Liber: Hands-Free Social Media",
    description:
      "Liber is an AI social media platform that allows users to interact with their friends and family without the need to touch their devices.",
    image: "/images/projects/Liber.png",
    gitUrl: "https://devpost.com/software/liber-hands-free",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blockaoke: Blockchain + Karaoke",
    description: "At Blockaoke, we blend blockchain and music to create an immersive web3 experience. We use Siamese Neural Networks to decide which cover song most closely resembles the original.",
    image: "/images/projects/Blockaoke.png",
    gitUrl: "https://ethglobal.com/showcase/blockaoke-unsoh",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WALL-E: Autonomous Vacuum Cleaner",
    description: "This autonomous vacuum cleaner utilizes Arduino, ultrasonic sensors, and a suction system to navigate, detect, and collect small to medium-sized garbage while avoiding obstacles. Simplifying waste management and household chores with creativity and innovation.",
    image: "/images/projects/walle.jpg",
    gitUrl: "https://github.com/ShreyasPeddi/Guido_SE101",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MedEx",
    description: "Improving drug discovery process with Artifical Intelligence. Created a stacked super model that predicts the binding affinity of a drug to a protein target.",
    image: "/images/projects/pharmahacks.png",
    gitUrl: "https://github.com/ShreyasPeddi/pharmahacks2023-submission",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "EQ",
    description:
      "EQ tells you whether the person you are texting is “actually” angry, sad, happy or feeling any other 27 emotions. It also recommends a reply you can text back based on the mood of the person you are chatting with.",
    image: "/images/projects/EQ.png",
    gitUrl: "https://github.com/Vidhi-26/EQ",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Notivity",
    description: "An advanced note-taking app for university students with various templates like Cornell Notes, Boxing Method, Chart, Outline and more. Users can also create their own custom templates.",
    image: "/images/projects/notivity.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Notivity",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Labyrinth Board Game",
    description: "Created the digital version of the Labryinth board game where players navigate through shifting mazes to reach their objectives",
    image: "/images/projects/labyrinth.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/Labyrinth-Board-Game",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "UniGo",
    description:
      "Uni Go is a platform that helps students find the right university for them. It provides a personalized experience for students to find the right university based on their preferences.",
    image: "/images/projects/unigo.jpeg",
    gitUrl: "https://github.com/ShreyasPeddi/UniGO",
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
