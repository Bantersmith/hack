import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Img, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface ConfluenceAnswerProps {
  answer?: any;
}

export const ConfluenceAnswer: React.FC<ConfluenceAnswerProps> = ({
  children,
  answer,
}) => {
  return (
    answer && (
      <Box key={answer.detail}>
        <Heading p={{ base: "8px 0", md: "4" }} size="s">
          Possible Confluence Answer
        </Heading>
        {answer.imageUrl && <Image src={answer.imageUrl} h="50px" />}
        <Box p={{ base: "0", md: "4" }}>
          <Box mt="1" fontWeight="semibold" as="h1" lineHeight="tight">
            <Stack direction="row">
              <Img src="./images/confluence.png" alt="Confluence" h="50px" />
              <Text fontSize="xl">{answer.title}</Text>
            </Stack>
          </Box>
        </Box>
        <Box pl={{ base: "0", md: "4" }} pr={{ base: "0", md: "4" }}></Box>
        {answer.urls?.map((url) => {
          return (
            <Box p={{ base: "8px 0", md: "4" }} key={url.title}>
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                <Text>
                  {url.title + ": "}
                  <Link
                    href={url.url}
                    isExternal
                    color="#F49A74"
                    wordBreak="break-all"
                  >
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
