import { Box, Flex, Link } from "@chakra-ui/layout";
import { Img, Spacer } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  let body = <Flex marginTop={2}></Flex>;

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#5729AC" p={4} w="100%">
      <Flex flex={1}>
        <Box w="150px">
          <Link href="/">
            <Img src="./images/sabiologo.PNG" alt="Sabio Logo" />
          </Link>
        </Box>
        <Spacer />
        <Link d={{ base: "none", "sm": "block" }} href="/url" color="white" p="4">
          URL Shorten
        </Link>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
