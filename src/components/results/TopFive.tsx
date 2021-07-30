import { Box, Button, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

const singleQuestion = (question) => {
  // const buttonOnClick = question => {
  //   const inputBox = document.getElementById('inputBox');
  //   inputBox.value=question;
  //   onSubmit({​search: question}​);
  //   // inputBox.focus();
  // };
  return (
    <Box pl={0} width="400px">
      <Stack direction="row">
        <Text p="2" pl="0">
          {question}
        </Text>
        <Spacer />
        <Button
          // onClick={() => onSubmit({​search: question}​)}
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

export const TopFive: React.FC<any> = ({ questions}) => {

  console.log("questions", questions)
  let renderedAnswers: any

  if(typeof questions !== 'undefined') {
    renderedAnswers = questions.map((question) => {
    return singleQuestion(question.friendlyName);
  });
  }

  return (
    <Box>
      <Heading color="#10006B" size="md" pb="2">Top Five Asked Questions</Heading>
      <Stack fontSize="sm" spacing={0}>{renderedAnswers}</Stack>
    </Box>
  );
};
