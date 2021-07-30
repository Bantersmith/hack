import { Box, Button, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

const singleQuestion = (question, onSubmit) => {
  return (
    <Box pl={0} width="400px" key={question}>
      <Stack direction="row">
        <Text p="2" pl="0">
          {question}
        </Text>
        <Spacer />
        <Button
          onClick={() => onSubmit({search: question})}
          size="xs"
          bgColor="#9FC6F6"
          textColor="#10006B"
          minW="64px">
            Ask this
        </Button>
      </Stack>
    </Box>
  );
};

export const RecentQuestions: React.FC<any> = ({ questions, onSubmit }) => {
  const renderedAnswers = questions.map((question) => {
    return singleQuestion(question.friendlyName, onSubmit);
  });

  return (
    <Box>
      <Heading color="#10006B" size="md" pb="2">Recently Asked Questions</Heading>
      <Stack fontSize="sm" spacing={0}>{renderedAnswers}</Stack>
    </Box>
  );
};
