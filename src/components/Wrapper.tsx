import { Box, Spacer, Flex } from "@chakra-ui/layout";
import React from "react";
import {Img} from "@chakra-ui/react";
interface WrapperProps {
  variant?: any;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={4}
      mx="auto"
      maxW={variant === "regular" ? "1500px" : "800px"}
      w="100%"
      p={4}
    >
      {children}
      <Spacer />
      <Box width="300px" ml="80%">
        <Img src="./images/robot2.PNG" alt="Sabio Logo"/>
      </Box>      
    </Box>

  );
};
