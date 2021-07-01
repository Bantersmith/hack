import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface EmptyResultProps {
  answer?: any;
}

export const EmptyResult: React.FC<EmptyResultProps> = ({
  children,
  answer,
}) => {
  return (
    <Box
      key={"empty"}
      maxW="xxl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_487063216_162506.jpg"
        maxH={"100px"}
        minW={"100%"}
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          lineHeight="tight"
          isTruncated
        >
          <Text fontSize="2xl">Good Question 🤔</Text>
        </Box>
      </Box>
      <Box p="6" pt="0">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          We dont have an accepted answer for that one yet. But we have added it
          to a list that we will try to provide answers for.
        </Box>
      </Box>
    </Box>
  );
};
