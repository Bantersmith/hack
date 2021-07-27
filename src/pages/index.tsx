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
import { AnswerResult } from "../components/results/AnswerResult";
import { EmptyResult } from "../components/results/EmptyResult";
import { SabioAnswer } from "../types/types";

process.env.GOOGLE_APPLICATION_CREDENTIALS =
  "../../hack-bot-318407-6493a8ac6783.json";

const Index = () => {
  const sabioAnswers: [SabioAnswer] = [
    {
      title: "Resetting your password",
      detail: "To reset your password you need to go to the url below.",
      imageUrl: "",
      urls: [
        {
          title: "Password reset",
          url: "https://thesab.io/password",
        },
      ],
    },
  ];

  const [resultMessage, setResultMessage] = useState<SabioAnswer[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    search: "",
  };
  const validationSchema = Yup.object({
    search: Yup.string().required(),
  });

  const sleep = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (
    values: any,
    { setSubmitting, setErrors, setStatus, resetForm }: any
  ) => {
    setSubmitted(false);
    sleep(2000).then(() => {
      console.log(JSON.stringify(values, null, 2));

      //Do some API call here

      //Set the resutls
      setResultMessage(sabioAnswers);
      setSubmitted(true);
      setSubmitting(false);
    });
  };

  return (
    <Layout>
      <Box align="center" p={4}>
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
                />
                <InputLeftElement>
                  <SearchIcon></SearchIcon>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button
                    colorScheme="yellow"
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

      {resultMessage.length > 0 && submitted && (
        <Stack>
          {resultMessage.map((answer, index) => {
            return <AnswerResult key={index} answer={answer} />;
          })}
        </Stack>
      )}
      {resultMessage.length == 0 && submitted && <EmptyResult />}
    </Layout>
  );
};

export default Index;
