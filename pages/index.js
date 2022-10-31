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
import { Heading, Box, Text, Flex, Grid } from "theme-ui";
import ScrollHint from "../components/scroll-hint";

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
      <Grid
        sx={{
          height: "100vh",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 2.96%, rgba(0, 0, 0,0.9) 100%), url(/assemble.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Flex sx={{ height: "100%", flexDirection: 'column' }}>
          <Grid
            columns={[1, 2]}
            gap={5}
            py={[3, 5]}
            px={[3, 5]}
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: ["100%", "min-content"],
                mt: [4, 0],
                fontFamily: `"IBM Plex Mono"!important`,
                mb: [-3, 0],
              }}
            >
              <Flex>
                <Box
                  sx={{
                    height: "18.42px",
                    width: "23.61px",
                    borderTop: "1px solid",
                    borderLeft: "1px solid",
                    borderColor: "rgba(175, 175, 175, 1)",
                  }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{
                    height: "18.42px",
                    width: "23.61px",
                    borderTop: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "rgba(175, 175, 175, 1)",
                  }}
                />
              </Flex>
              <Box
                sx={{
                  fontSize: [2, 4],
                  mb: 3,
                  px: 4,
                  zIndex: 999,
                  position: "relative",
                }}
              >
                HACK CLUB PRESENTS
              </Box>
              <Heading
                sx={{
                  fontSize: ["24vw", "12vw"],
                  lineHeight: "0.8",
                  fontWeight: 800,
                  px: [3, 4],
                  mb: 2,
                  color: "white",
                  fontFamily: '"Fira Code"',
                  textShadow: `0px 0px 21.4900016784668px rgba(255, 71, 148, 1),
                          0px 0px 32.9800033569336px rgba(255, 71, 148, 0.9),
                          0px 0px 105.42999267578125px rgba(255, 71, 148, 0.8),
                          0px 0px 150.8599853515625px rgba(255, 71, 148, 0.7)`,
                }}
              >
                EP0CH
              </Heading>
              <Flex>
                <Box
                  sx={{
                    height: "18.42px",
                    width: "23.61px",
                    borderBottom: "1px solid",
                    borderLeft: "1px solid",
                    borderColor: "rgba(175, 175, 175, 1)",
                  }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{
                    height: "18.42px",
                    width: "23.61px",
                    borderBottom: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "rgba(175, 175, 175, 1)",
                  }}
                />
              </Flex>
            </Box>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: ["center", `flex-end`],
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: 3,
                  fontSize: ["6vw", 3],
                  textAlign: ["center", "right"],
                  textTransform: "uppercase",
                  fontFamily: `"IBM Plex Mono"`,
                  maxWidth: "75vw",
                }}
              >
                <Box
                  sx={{
                    fontWeight: 800,
                    maxWidth: ["60vw", "100vw"],
                    margin: ["auto", 0]
                  }}
                >
                  Dec. 30 2022 to Jan. 1 2023
                </Box>
                <Box sx={{ fontWeight: 800 }}>CyberCity, Delhi NCR </Box>
                <Box>₹1.25 Lakh in travel stipends </Box>
                <Box> Doors open at 6PM; 42-hours long </Box>
              </Flex>
            </Flex>
            <ScrollHint mobile />
          </Grid>
          <Flex sx={{flexGrow: 1, alignItems: 'flex-end', mb: 5}}>
          <ScrollHint mobile={false} /></Flex>
        </Flex>
        
      </Grid>
      <Hackathon />
      <Layout>
        <Glossary />
        <Register />
        <Closing />
      </Layout>
    </>
  );
}
