import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { AnswerResult } from "../components/AnswerResult";
import { Layout } from "../components/Layout";

const Index = () => {
  interface Property {
    imageUrl: string;
    imageAlt: string;
    beds: number;
    baths: number;
    title: string;
    formattedPrice: string;
    reviewCount: number;
    rating: number;
  }

  const properties = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];
  const [resultMessage, setResultMessage] = useState<Property[]>([]);

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
    sleep(2000).then(() => {
      console.log(JSON.stringify(values, null, 2));
      setResultMessage(properties);
      setSubmitting(false);
      resetForm();
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
                    colorScheme="teal"
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
      {resultMessage && (
        <Stack>
          {resultMessage.map((property, index) => {
            return <AnswerResult key={index} answer={property} />;
          })}
        </Stack>
      )}
    </Layout>
  );
};

export default Index;
