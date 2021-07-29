import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Layout } from "../components/Layout";
import { EmptyResult } from "../components/results/EmptyResult";
import { SabioAnswer } from "../components/results/SabioAnswer";
import { StackOverflowAnswer } from "../components/results/StackOverflowAnswer";
import { ISabioAnswer } from "../types/types";
import { TopFive } from "../components/results/TopFive";
import { RecentQuestions } from "../components/results/RecentQuestions";
import Head from "next/head"

process.env.GOOGLE_APPLICATION_CREDENTIALS =
  "../../hack-bot-318407-6493a8ac6783.json";

  export async function getServerSideProps() {
    const [top5response, recentResponse] = await Promise.all([
      fetch(`https://intent.davidwalker.dev/stats/top/5`, {
      method: "GET"}), 
      fetch(`https://intent.davidwalker.dev/stats/recent/5`, {
      method: "GET"}), 
    ]);
    const [questions, recents] = await Promise.all([
      top5response.json(), 
      recentResponse.json()
    ]);
    return { props: { questions, recents } };
  }

const getSearch = async (term) => {
  const response = await fetch(
    `https://intent.davidwalker.dev/detectIntent?search=${term}`,
    {
      method: "GET",
    }
  );

  const searchResult = await response.json();
  return searchResult;
};

const Index = (props) => {
  let sabioAnswerArr: any = [];
  let stackAnswerArr: any = [];
  let confAnswerArr: any = [];

  const [sabioAnswer, setSabioAnswer] = useState<ISabioAnswer[]>([]);
  const [confAnswer, setConfAnswer] = useState<ISabioAnswer[]>([]);
  const [stackAnswer, setStackAnswer] = useState<ISabioAnswer[]>([]);

  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object({
    search: Yup.string().required(),
  });

  const onSubmit = async (
    values: any,
    { setSubmitting, setErrors, setStatus, resetForm }: any
  ) => {
    setSubmitted(false);
    const answers = await getSearch(values.search);
    console.log("Answers:", answers);
    sabioAnswerArr.push(answers.dialogflowResponse);
    stackAnswerArr.push(answers.stackoverflowResponse);
    confAnswerArr.push(answers.confluenceResponse);

    //Set the resutls
    setSabioAnswer(sabioAnswerArr);
    setStackAnswer(stackAnswerArr);
    setConfAnswer(confAnswerArr);
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>Onboardabot</title>
      </Head>
      <Box p={4}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, errors, isSubmitting }) => (
            <Box
              maxWidth={800}
              p={6}
              m="10px auto"
              as="form"
              onSubmit={handleSubmit as any}
            >
              <InputGroup size="md">
                <Input
                  as={Field}
                  variant="flushed"
                  pr="4.5rem"
                  type="text"
                  name="search"
                  placeholder="What do you want to know"
                  id="inputBox"
                />
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button
                    color="black"
                    bgColor="#FBFBB3"
                    h="1.75rem"
                    size="md"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          )}
        </Formik>
      </Box>

      <Stack direction ="row" ml="4">
        <Stack> 
          <TopFive questions={props.questions} />
          <RecentQuestions questions={props.recents} />
        </Stack>
        <Box>
            {sabioAnswer.length > 0 &&
            submitted &&
            sabioAnswer[0].intent != "Default Fallback Intent" && (
              <Stack textColor="#10006B">
                {sabioAnswer.map((answer, index) => {
                  console.log("Answer is:", answer);
                  return <SabioAnswer key={index} answer={answer} />;
                })}
              </Stack>
            )}

          {sabioAnswer.length == 0 && submitted && <EmptyResult />}
          {sabioAnswer.length > 0 &&
            submitted &&
            sabioAnswer[0].intent == "Default Fallback Intent" && <EmptyResult />}

      {stackAnswer.length > 0 && submitted && (
        <Stack textColor="#10006B">
          {stackAnswer.map((answer, index) => {
            console.log("Answer is:", answer);
            return <StackOverflowAnswer key={index} answer={answer} />;
          })}
        </Stack>
      )}

          {confAnswer.length > 0 && submitted && (
            <Stack textColor="#10006B">
              {confAnswer.map((answer, index) => {
                console.log("Answer is:", answer);
                return <SabioAnswer key={index} answer={answer} />;
              })}
            </Stack>
          )}
          </Box>
      </Stack>
    </Layout>
  );
};

export default Index;
