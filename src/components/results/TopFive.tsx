import { Box, Button, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

const singleQuestion = (question) => {
  return (
    <Box pl={0} width="400px">
      <Stack direction="row">
        <Text p="2" pl="0">
          {question}
        </Text>
        <Spacer></Spacer>     
        <Button size="sm" bgColor="#9FC6F6" textColor="#10006B">Ask this</Button>
      </Stack>
    </Box>
  );
};

export const TopFive: React.FC<any> = ({ questions }) => {


  console.log("questions", questions)
  let renderedAnswers: any

  if(typeof questions !== 'undefined') {
    renderedAnswers = questions.map((question) => {
    return singleQuestion(question.friendlyName);
  });
  }

  return (
    <Box bottom="0" right="30">
      <Heading pb="6">Top Five</Heading>
      <Stack spacing={0}>{renderedAnswers}</Stack>
    </Box>
  );
};
