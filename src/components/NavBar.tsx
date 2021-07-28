import { Box, Flex, Link } from "@chakra-ui/layout";
import { Img, Spacer } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  let body = <Flex marginTop={2}></Flex>;

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#5E1BB3" p={4}>
      <Flex flex={1}>
          <Box w="150px">        
            <Link href="/index">
              <Img src="./images/sabiologo.PNG" alt="Sabio Logo"/>
            </Link>
          </Box>
          <Spacer></Spacer>
          <Box w="150px" mt="6">
            <Link href="/url" color="white">
              URL Shorten
            </Link>
          </Box>
          <Box w="150px" mt="6">
            <Link href="/topFive" color="white">
              FAQ's
            </Link>
          </Box> 
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
