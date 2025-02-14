import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../css/links.css"

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return ( 
    <VStack 
      color="black" 
      backgroundColor="white" 
      cursor="pointer" 
      borderRadius="xl" 
    > 
      <Image borderRadius="xl" src={imageSrc} alt={title} /> 
      <VStack spacing={4} p={4} alignItems="flex-start"> 
        <HStack justifyContent="space-between" alignItems="center"> 
          <Heading as="h3" size="md"> 
            {title} 
          </Heading> 
        </HStack> 
        <Text color="#64748b" fontSize="lg"> 
          {description} 
        </Text> 
        <HStack spacing={2} alignItems="center"> 
          <a href={url} className="link" target="_blank" rel="noopener noreferrer"> See more </a> 
          <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
        </HStack> 
      </VStack> 
    </VStack> 
  ); 
};

export default Card;
