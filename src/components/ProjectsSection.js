import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Drowsiness Detection System",
    description:
      "An openCV based project that can be used to detect if the driver is feeling sleepy while driving the vehicle 😴. This project uses the concept of EAR and MAR (Eye and Mouth Aspect Ratios) , uses dlib to extract facial landmarks and drowsiness is detected using eye closure rates and yawn counts",
    getImageSrc: () => require("../images/Drowsiness.jpeg"),
    url: "https://github.com/MananKapila/Drowsiness-Detection-System-Computer-Vision-project",
  },
  {
    title: "Real Estate Website",
    description:
      "A Django based website on which property dealers can list the property and customer can contact them. This project is powered by ML model to provide tranperency to the customer regarding the listed price 🔥️. DEPLOYING THE WEBSITE SOON...",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://github.com/MananKapila/Real-Estate-Website"
  },
  {
    title: "Movie rating website",
    description:
      "A website to rate your favorite movies. Front end is based on React and for backend we used Mongodb as the database and utlizied Java Springboot to create the APIs 🧑🏻‍💻. DEPLOYING THE WEBSITE SOON...",
    getImageSrc: () => require("../images/vfx-visual-effects-vanas.jpg"),
    url: "https://github.com/MananKapila/my-imdb-web-backend"
  },
  {
    title: "Space shooting Game",
    description:
      "A fun project based on C++ and Open GL in which the player needs to destroy the incoming meteors ☄️ and beat the high score, if the meteor hits the player, their health bar reduces.",
    getImageSrc: () => require("../images/image copy.png"),
    url: "https://github.com/MananKapila/CG-Project"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
