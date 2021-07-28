import { Box, Spacer } from "@chakra-ui/layout";
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
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      p={4}
    >
      {children}
      <Spacer />
      <Box ml="96" width="300px">
        <Img src="./images/robot2.PNG" alt="Sabio Logo"/>
      </Box>      
    </Box>

  );
};
