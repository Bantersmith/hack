import { Button } from "@chakra-ui/button";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Heading, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  let body = <Flex color="white" marginTop={2}></Flex>;

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#313536" p={4}>
      <Flex flex={1}>
        <NextLink href="/">
          <Link>
            <Heading color="#F49A74">TheSab.io</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
