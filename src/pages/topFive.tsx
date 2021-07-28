import React from "react";
import { Layout } from "../components/Layout";
import { TopFive } from "../components/results/TopFive";

const topFive = () => {
  //Get these via API call to search API
  const topFive = [
    { question: "How do i reset my password?" },
    { question: "Maven Issues" },
    { question: "How do i Book a holiday?" },
    { question: "How do i Conact Helpdesk?" },
    { question: "Can i install node?" },
  ];

  return (
    <Layout>
      <TopFive questions={topFive} />
    </Layout>
  );
};

export default topFive;
