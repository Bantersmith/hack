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
    <Flex wrap={{sm: "wrap", "2xl": "nowrap"}}>
      <Box
        mt={4}
        mx="auto"
        maxW={variant === "regular" ? "1500px" : "800px"}
        w="100%"
        p={4}
      >
        {children}
      </Box>
      <Img
        src="./images/robot2.PNG"
        boxSize="300px"
        alt="Sabio Logo"
        m={{sm: "auto", "2xl": "32px 32px 0 0"}}
      />
    </Flex>
  );
};
