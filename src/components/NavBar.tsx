import { Box, Flex, Link } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  let body = <Flex marginTop={2}></Flex>;

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#5E1BB3" p={4}>
      <Flex flex={1}>
          <Box w="150px">
            <Img src="./images/sabiologo.PNG" alt="Sabio Logo"/>
          </Box>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
