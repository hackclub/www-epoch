import Meta from "../components/meta";
import Intro from "../components/intro";
import Forward from "../components/forward";
import Details from "../components/details";
import { Box, Card, Grid, Heading, Container, Text } from "theme-ui";
import FilmGrain from "../components/filmGrain";
import Icon from "@hackclub/icons";
import Assemble from "../public/assemble.jpg";
import Assemble2 from "../public/assemble2.JPG";
import Assemble3 from "../public/assemble3.JPG";
import Assemble4 from "../public/assemble4.JPG";
import Image from "next/image";
import Flag from "../components/flag";
import MuxPlayer from "@mux/mux-player-react";

export default function Main() {
  return (
    <>
      <Flag />
      <Meta />
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          pt: 5,
          pb: 6,
          background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6965161064425771) 20%, rgba(0,0,0,0.2987570028011205) 100%), 
                        url(https://cloud-mm9cx1u00-hack-club-bot.vercel.app/0gurgaon-4.png)`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
          textAlign: 'left'
        }}
      >
        <h1 className="title" style={{margin: "auto",
            width: "800px"}}>EPOCH</h1>
        <Box
          sx={{
            margin: "auto",
            width: "800px",
            mt: "-16px",
            mb: 4,
            fontSize: 3,
          }}
        >
          <p>
            With every new year, comes new possibilities, adventures, and
            memories around the world.
          </p>
          <p>
            This coming new year, 150+ teenage hackers will welcome in 2023
            together at a high-school hackathon unlike anything Asia has seen
            before.
          </p>
          <b>All are welcome, RSVP today or read on for more.</b>
        </Box>
        <Grid
          columns={2}
          sx={{
            gap: 3,
            maxWidth: "800px",
            margin: "auto",
            fontSize: "1.5em",
            fontWeight: 600,
          }}
        >
          <Box sx={{ padding: "16px", background: "green", borderRadius: 4 }}>
            December 30th to January 1st
          </Box>
          <Box sx={{ padding: "16px", background: "blue", borderRadius: 4 }}>
            Doors open at 6PM
          </Box>
          <Box sx={{ padding: "16px", background: "orange", borderRadius: 4 }}>
            Cyber City, Delhi NCR
          </Box>
          <Box sx={{ padding: "16px", background: "purple", borderRadius: 4 }}>
            ₹12.5 Lakh in Travel Grants
          </Box>
          <Box
            sx={{
              padding: "16px",
              background: "red",
              borderRadius: 4,
              gridColumn: "1 / span 2",
            }}
          >
            Organised by the Hack Club community, for you.
          </Box>
        </Grid>
        <Card
          sx={{
            background: "dark",
            color: "white",
            lineHeight: 1.5,
            border: "3px dashed",
            borderColor: 'white',
            textAlign: "left",
            margin: "auto",
            maxWidth: "800px",
            mt: 5,
          }}
        >
          <Heading sx={{ color: "white", fontSize: 5, mb: 3 }}>
            hackathon /ˈhakəθɒn/
          </Heading>
          <Box sx={{ fontSize: 3, width: "100%" }}>
            <Text
              sx={{
                background: "white",
                color: "black",
                display: "inline-block",
                py: 1,
                px: 2,
                borderRadius: 4,
                fontSize: 2,
              }}
            >
              noun
            </Text>{" "}
            <Text
              sx={{
                background: "white",
                color: "black",
                display: "inline-block",
                py: 1,
                px: 2,
                borderRadius: 4,
                fontSize: 2,
              }}
            >
              informal
            </Text>{" "}
            a social coding event where teens come together to build projects in
            a weekend and share them with the world.
            <Box sx={{position: 'relative', mt: 3}}>
              <Text
                sx={{
                  background: "white",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  py: 1,
                  px: 2,
                  borderRadius: 4,
                  gap: "6px",
                  fontSize: 3,
                  pr: 3,
                  mt: 2,
                  ml: 2,
                  width: "fit-content",
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  zIndex: 999
                }}
              >
                <Icon glyph="attachment" size={24} />
                inside-a-hackathon.mp4
              </Text>
              <MuxPlayer
                streamType="on-demand"
                playbackId="udmg1CkLvMlL01yo3jmE7bs02A00Wh8MjcgJKVQtyLah300"
              />
            </Box>
          </Box>
        </Card>
        <Box
          sx={{
            margin: "auto",
            width: "800px",
            mt: 5,
            fontSize: 4,
          }}
        >
          50+ of us have came together to put this event together,
          you may be wondering what attending Epoch will be like. 
          When we asked around, here's what folks told us 
          you could expect:
          <Box sx={{background: '#000', display: 'flex', fontFamily: 'Roboto', border: '3px solid white', borderRadius: 4, overflow: 'hidden'}}>
            <img src="https://github.com/sampoder.png" height="84px" />
            <Box>
              <b>@sampoder</b>
              <p>
                Epoch will be
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Card
          sx={{
            background: "dark",
            color: "white",
            lineHeight: 1.5,
            border: "3px dashed",
            borderColor: 'white',
            textAlign: "left",
            margin: "auto",
            maxWidth: "800px",
            mt: 0
          }}
        >
          <Heading>Frequently Asked Questions</Heading>
      </Card>
      <style>
        {`
        
        .title {
          font-family: 'Times New Roman';
          font-size: 6em;
          line-height: 1em;
          font-style: italic;
          margin-block-start: 0.2em;
          margin-block-end: 0.6em;
          margin-top: 0;
          margin-bottom: 0;
          letter-spacing: 2px;
          text-shadow: 1px 1px 3px #ddd, 2px 2px 9px #555, 3px 3px 2px #999,
            4px 4px 4px #999, 6px 6px 6px #999, 6px 6px 6px #999,
            0.2em 0.2em 0.25em black;
        }
        @media (min-width: 992px) {
          .title {
            font-size: 9em;
          }
        }
        
        `}
      </style>
    </>
  );
}

const RundownCard = ({ header = "header", description = "description" }) => (
  <Box
    bg="white"
    p={3}
    sx={{
      ":hover": {
        transform: "translateY(-3px)",
        transition: "transform 0.2s",
      },
      transition: "transform 0.2s",
      position: "relative",
      zIndex: "999",
    }}
  >
    <b>{header}</b> {description}
  </Box>
);
