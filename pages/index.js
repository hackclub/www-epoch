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
import { Heading, Box, Text, Flex } from "theme-ui";

import theme from "@hackclub/theme";
import Sparkles from "../components/sparkles";

export default function Main() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Meta
        as={Head}
        name="Epoch ~ Delhi NCR, 30th December 2022"
        title="Epoch ~ Delhi NCR, 30th December 2022"
        description="This coming new year, 150+ teenage hackers will welcome in 2023 together at a high-school hackathon unlike anything Asia has seen before." // page description
        image="https://cloud-gr64lwarr-hack-club-bot.vercel.app/0meta-assemble__1_.png"
        color="#C0362C"
      />
      <Flex
        sx={{
          height: "100vh",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <img
          src="/assemble.jpg"
          style={{ objectPosition: "center 15vw", objectFit: "cover" }}
        />
        <Box backgroundColor="darker" py={4} px={4}>
          <Heading as="h1" sx={{ fontSize: "12vw", lineHeight: "0.8" }}>
            <Text
              sx={{
                position: "relative",
                overflow: "hidden",
                ...theme.util.gxText("dark", "darkless"),
                WebkitTextStroke: "1px rgba(255,255,255,0.5)",
              }}
            >
              {" "}
              <Flex sx={{ width: "100%" }}>
                <Text
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    ...theme.util.gxText("dark", "darkless"),
                    WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                  }}
                >
                  HACK CLUB
                </Text>
                <Box sx={{ textAlign: "center", flexGrow: 1 }}>
                  <img
                    src="/annotation.png"
                    style={{ width: "100%", maxWidth: "230px", transform: `rotate(5deg) translateY(16px)` }}
                  />
                </Box>
              </Flex>
              PRESENTS
            </Text>{" "}
            <Sparkles>
              <Text
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  ...theme.util.gxText("blue", "cyan"),
                  color: "blue",
                  WebkitTextStroke: "2px rgba(255,255,255,0.5)",
                  textShadow: "elevated",
                }}
              >
                EPOCH
              </Text>
            </Sparkles>
          </Heading>
          <Foreword />
        </Box>
      </Flex>
      <Hackathon />
      <Layout>
        <Glossary />
        <Expectations />
        <Register />
        <Closing />
      </Layout>
    </>
  );
}
