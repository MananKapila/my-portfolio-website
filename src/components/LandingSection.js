import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/IMG_20220928_182827_804.jpg';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center" mt={8}>
      <Avatar size="2xl" name="Manan Kapila" src={profilePic}/>
      <Heading as="h1" size="xl" > Manan Kapila </Heading>
      <Heading as="h5" size="l"> Software Engineer </Heading>
      <Text fontSize="lg" textAlign="center" maxWidth="800px">
        Hi, I'm Manan Kapila, a software developer with a passion for creating innovative solutions. I have 2 years of experience in the industry and am currently working at Target Corporation, Bangalore, India. I specialize in backend development and currently trying to learn frontend technologies. Let's build something amazing together!
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
