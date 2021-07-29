import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Image,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ISabioAnswer } from "../../types/types";

interface AnswerResultProps {
  answer: ISabioAnswer;
}

export const SabioAnswer: React.FC<AnswerResultProps> = ({
  children,
  answer,
}) => {
  return (
    answer && (
      <Box
        key={answer.detail}
        maxW="xxl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        {answer.imageUrl && (
          <Image src={answer.imageUrl} maxH={"100px"} minW={"100%"} />
        )}
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h1"
            lineHeight="tight"
            isTruncated
          >
            <Stack direction="row">
              <Box w="50px">
                <Img src="./images/sabio.PNG" alt="Sabio" />
              </Box>
              <Text fontSize="2xl">{answer.title}</Text>
            </Stack>
          </Box>
        </Box>
        <Box pl="6" pr="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {answer.detail}
          </Box>
        </Box>
        {answer.urls?.map((url) => {
          return (
            <Box p="6" key={url.title}>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <Text>
                  {url.title + " - "}
                  <Link href={url.url} isExternal color="#F49A74">
                    {url.url.substr(url.url.indexOf("//") + 2)}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    )
  );
};
