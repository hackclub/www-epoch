import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";
import Layout from "../components/layout";
import Foreword from "../components/forward";
import Hackathon from "../components/hackathon";
import Expectations from "../components/expectations";
import Register from "../components/register";
import Glossary from "../components/glossary";
import Closing from "../components/closing";

export default function Main() {
  return (
    <>
      <Flag />
      <Meta
        as={Head}
        name="Epoch ~ Delhi NCR, 30th December 2022"
        title="Epoch ~ Delhi NCR, 30th December 2022"
        description="This coming new year, 150+ teenage hackers will welcome in 2023 together at a high-school hackathon unlike anything Asia has seen before." // page description
        image="https://cloud-gr64lwarr-hack-club-bot.vercel.app/0meta-assemble__1_.png"
        color="#C0362C"
      />
      <Layout>
        <Foreword />
        <Hackathon />
        <Expectations />
        <Register />
        <Glossary />
        <Closing />
      </Layout>
    </>
  );
}
