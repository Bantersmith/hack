import { Box, Spacer, Flex } from "@chakra-ui/layout";
import React from "react";
import { Img } from "@chakra-ui/react";

export const Wrapper: React.FC<any> = ({ children }) => {
  return (
    <Flex>
      <Box mt={4} mx={{ base: "4", md: "8" }} maxW="1500px" w="100%">
        {children}
      </Box>
      <Img
        src="./images/robot2.PNG"
        boxSize="300px"
        alt="Sabio Logo"
        d={{ base: "none", "2xl": "block" }}
      />
    </Flex>
  );
};
