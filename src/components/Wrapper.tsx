import { Box } from "@chakra-ui/layout";
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
      <Box>
        <Img boxSize="300px" src="./images/robot.PNG" alt="Sabio Logo"/>
      </Box>      
    </Box>

  );
};
