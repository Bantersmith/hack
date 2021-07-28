import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const singleQuestion = (question) => {
  return (
    <Box p={0}>
      {question} <Button>Ask this</Button>
    </Box>
  );
};

export const TopFive: React.FC<any> = ({ questions }) => {
  const renderedAnswers = questions.map((question) => {
    return singleQuestion(question.question);
  });

  return (
    <Box bottom="0" right="30">
      <Heading>Top Five</Heading>
      <Stack spacing={0}>{renderedAnswers}</Stack>
    </Box>
  );
};
