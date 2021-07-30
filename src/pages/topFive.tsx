import React from "react";
import { Layout } from "../components/Layout";
import { TopFive } from "../components/results/TopFive";
import Head from "next/head"

export async function getStaticProps(context) {
  const response = await fetch(`https://intent.davidwalker.dev/stats/top/5`, {
    method: "GET",
  });

  const questions = await response.json();
  console.log("Data:", questions);

  return {
    props: {questions}, // will be passed to the page component as props
  }
};



const topFive = (questions) => {
  return (
    <Layout>
      <Head>
        <title>FAQs</title>
      </Head>
      <TopFive questions={ questions.questions } />
    </Layout>
  );
}

export default topFive;
