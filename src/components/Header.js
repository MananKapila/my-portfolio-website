import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Icon } from "@chakra-ui/react";

const socials = [
  {
    id: 'email',
    icon: faEnvelope,
    url: "mailto: manankapila2000@gmail.com",
  },
  {
    id: 'github',
    icon: faGithub,
    url: "https://github.com/MananKapila",
  },
  {
    id: 'linkedin',
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/manankapila/",
  },
  {
    id: 'medium',
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 'stackoverflow',
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <React.Fragment key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon as={FontAwesomeIcon} icon={social.icon} boxSize={6} />
                </a>
                {<span style={{ margin: '0 10px' }}></span>}
              </React.Fragment>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link fontSize="lg" onClick={handleClick('projects')}>
                Projects
              </Link>
              <Link fontSize="lg" onClick={handleClick('contactme')}>
                Contact
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
