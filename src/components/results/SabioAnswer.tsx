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
      >
        {answer.imageUrl && (
          <Image src={answer.imageUrl} h="50px" />
        )}
        <Box p={{base: "8px 0", "md": "4"}}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h1"
            lineHeight="tight"
          >
            <Stack direction="row">
              <Img src="./images/sabio.PNG" alt="Sabio" h="50px" />
              <Text fontSize="xl">{answer.title}</Text>
            </Stack>
          </Box>
        </Box>
        <Box pl={{base: "0", "md": "4"}} pr={{base: "0", "md": "4"}}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {answer.detail}
          </Box>
        </Box>
        {answer.urls?.map((url) => {
          return (
            <Box p={{base: "8px 0", "md": "4"}} key={url.title}>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              >
                <Text>
                  {url.title + ": "}
                  <Link href={url.url} isExternal color="#F49A74" wordBreak="break-all">
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
