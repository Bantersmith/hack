import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";

interface FollowUpResultProps {
  answer?: any;
}

export const FollowUpResult: React.FC<FollowUpResultProps> = ({
  children,
  answer,
}) => {
  return (
    <Box
      key={answer.imageAlt}
      maxW="xxl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={answer.imageUrl} alt={answer.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {answer.beds} beds &bull; {answer.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {answer.title}
        </Box>

        <Box>
          {answer.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < answer.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {answer.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
