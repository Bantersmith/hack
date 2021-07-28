import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";

const url = () => {
  const onSubmit = (
    values: any,
    { setSubmitting, setErrors, setStatus, resetForm }: any
  ) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Layout>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ url: "", slug: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField
                name="url"
                placeholder="URL"
                label="url"
                type="text"
              />
            </Box>
            <Box mt={4}>
              <InputField name="slug" placeholder="Slug" label="slug" type="text" />
            </Box>
            <Button
              mt={4}
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
