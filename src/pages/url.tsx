import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import * as Yup from "yup";
import Head from "next/head"

const url = () => {
  const validationSchema = Yup.object({
    url: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    slug: Yup.string().required(),
  });

  const onSubmit = async (
    values: any,
    { setSubmitting, setErrors, setStatus, resetForm }: any
  ) => {
    const response = await fetch(`https://url.davidwalker.dev/${values.slug}`, {
      method: "POST",
      mode: "cors",
      body: `${values.url}`,
    });

    const data = await response.text();
    console.log("Data:", data);
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Layout >
      <Head>
        <title>URL Shortner</title>
      </Head>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={validationSchema}
        initialValues={{ url: "", slug: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form >
            <Box mt={4} ml="96" mr="96">
              <InputField
                color="black"
                name="url"
                placeholder="https://www.example.com"
                label="Url"
                type="outline"
              />
            </Box>
            <Box mt={4} ml="96" mr="96">
              <InputField
                color="black"
                name="slug"
                placeholder="Slug"
                label="Slug"
                type="text"
              />
            </Box>
            <Button
              mt={4}
              ml = "96"
              type="submit"
              isLoading={isSubmitting}
              bgColor="#FBFBB3"
              color="black"
            >
              Shorten
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default url;
