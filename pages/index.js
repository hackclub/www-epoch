import Meta from "@hackclub/meta";
import Intro from "../components/intro";
import Forward from "../components/forward";
import Details from "../components/details";
import {
  Box,
  Card,
  Grid,
  Heading,
  Container,
  Text,
  Image,
  Input,
  Link,
  Button,
} from "theme-ui";
import FilmGrain from "../components/filmGrain";
import Icon from "@hackclub/icons";
import Flag from "../components/flag";
import MuxPlayer from "@mux/mux-player-react";
import Head from "next/head";

export default function Main() {
  return (
    <>
      <Flag />
      <Meta
        as={Head} // component to wrap tags in, defaults to React.Fragment
        name="Epoch ~ Delhi NCR, 30th December 2022" // site name
        title="Epoch ~ Delhi NCR, 30th December 2022" // page title
        description="This coming new year, 150+ teenage hackers will welcome in 2023 together at a high-school hackathon unlike anything Asia has seen before." // page description
        image="https://cloud-es7s73uc3-hack-club-bot.vercel.app/0meta-assemble.png" // large summary image URL
        color="#C0362C" // theme color
      />
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          pt: 5,
          pb: 4,
          background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6965161064425771) 20%, rgba(0,0,0,0.7987570028011205) 100%), 
                        url(https://user-images.githubusercontent.com/39828164/189933158-9f00ceaf-7f61-4bef-9911-4cf4a14e0e4d.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "left",
        }}
      >
        <h1
          className="title"
          style={{
            margin: "auto",
            width: "800px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          EPOCH
          <FilmGrain />
        </h1>
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
            borderColor: "white",
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
            <Box sx={{ position: "relative", mt: 3 }}>
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
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 999,
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
          50+ of us have came together to put this event together, you may be
          wondering what attending Epoch will be like. When we asked around,
          here's what folks told us you could expect:
          <Box
            sx={{
              background: "#000",
              display: "flex",
              fontFamily: "Noto Sans",
              border: "1px solid white",
              borderRadius: 8,
              overflow: "hidden",
              mt: 4,
              p: 3,
              gap: 3,
              fontSize: 2,
            }}
          >
            <Image
              src="https://github.com/tejasag.png"
              sx={{
                borderRadius: 7,
                height: "84px",
                width: "84px",
                flexShrink: "0",
              }}
            />
            <Box>
              <b>@tejasag</b>
              <Box mt={2} sx={{ lineHeight: "1.3" }}>
                Before my first hackathon, I'd never been in a room with fellow
                teenagers who found in joy in programming. That's what you have
                at a hackathon and it's magical.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#000",
              display: "flex",
              fontFamily: "Noto Sans",
              border: "1px solid white",
              borderRadius: 8,
              overflow: "hidden",
              mt: 4,
              p: 3,
              gap: 3,
              fontSize: 2,
            }}
          >
            <Image
              src="https://github.com/maggie-j-liu.png"
              sx={{
                borderRadius: 7,
                height: "84px",
                width: "84px",
                flexShrink: "0",
              }}
            />
            <Box>
              <b>@maggie-j-liu</b>
              <Box mt={2} sx={{ lineHeight: "1.3" }}>
                Before my first hackathon, I'd never been in a room with fellow
                teenagers who found in joy in programming. That's what you have
                at a hackathon and it's magical.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#000",
              display: "flex",
              fontFamily: "Noto Sans",
              border: "1px solid white",
              borderRadius: 8,
              overflow: "hidden",
              mt: 4,
              p: 3,
              gap: 3,
              fontSize: 2,
            }}
          >
            <Image
              src="https://github.com/Nilaany26.png"
              sx={{
                borderRadius: 7,
                height: "84px",
                width: "84px",
                flexShrink: "0",
              }}
            />
            <Box>
              <b>@Nilaany</b>
              <Box mt={2} sx={{ lineHeight: "1.3" }}>
                Before my first hackathon, I'd never been in a room with fellow
                teenagers who found in joy in programming. That's what you have
                at a hackathon and it's magical.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#000",
              display: "flex",
              fontFamily: "Noto Sans",
              border: "1px solid white",
              borderRadius: 8,
              overflow: "hidden",
              mt: 4,
              p: 3,
              gap: 3,
              fontSize: 2,
            }}
          >
            <Image
              src="https://github.com/khalby786.png"
              sx={{
                borderRadius: 7,
                height: "84px",
                width: "84px",
                flexShrink: "0",
              }}
            />
            <Box>
              <b>@khalby786</b>
              <Box mt={2} sx={{ lineHeight: "1.3" }}>
                Before my first hackathon, I'd never been in a room with fellow
                teenagers who found in joy in programming. That's what you have
                at a hackathon and it's magical.
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "auto",
            width: "800px",
            mt: 4,
            fontSize: 4,
          }}
        >
          Teenagers interested in technology: there's no better place to be this
          New Years than at Epoch. Sign up today to join us for an adventure
          like none other.
        </Box>
        <Card
          sx={{
            background: "dark",
            color: "white",
            lineHeight: 1.5,
            border: "3px dashed",
            borderColor: "white",
            textAlign: "left",
            margin: "auto",
            maxWidth: "800px",
            mt: 4,
            textAlign: "center",
          }}
        >
          <Box sx={{ fontSize: 3, width: "100%" }}>
            <Grid>
              <Heading sx={{ color: "white", fontSize: 4, textAlign: "left" }}>
                Register for Epoch
              </Heading>
              <Box sx={{ textAlign: "left" }}>
                Epoch is open to anyone anywhere 18 or younger. Participation,
                including meals, costs nothing and travel stipends are
                available.
              </Box>
              <Input
                placeholder="Name"
                sx={{
                  color: "white",
                  border: "1px solid",
                  borderColor: "slate",
                }}
              />
              <Input
                placeholder="Email"
                sx={{
                  color: "white",
                  border: "1px solid",
                  borderColor: "slate",
                }}
              />
              <Button>Finish More 11 Fields To Register</Button>
            </Grid>
          </Box>
        </Card>
        <Card
          sx={{
            background: "dark",
            color: "white",
            lineHeight: 1.5,
            border: "3px dashed",
            borderColor: "white",
            textAlign: "left",
            margin: "auto",
            maxWidth: "800px",
            mt: 4,
            textAlign: "center",
          }}
        >
          <Grid sx={{ fontSize: 3, width: "100%", textAlign: "left" }}>
            <Heading sx={{ color: "white", fontSize: 4 }}>The Glossary</Heading>
            <Box as="details">
              <Box as="summary">Can I join Epoch?</Box>
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderColor: "slate",
                  mt: 2,
                  pt: 2,
                }}
              >
                If you're eighteen or under, yes, we are so excited to see you
                in Cyber City! If you're over 18 but still in high school, shoot
                us a mail at epoch@hackclub.com.
              </Box>
            </Box>
            <Box as="details">
              <Box as="summary">What do I need?</Box>
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderColor: "slate",
                  mt: 2,
                  pt: 2,
                }}
              >
                Your laptop, chargers, anything for your hack (hardware?),
                toiletries, sleeping bags, and an open mind.
              </Box>
            </Box>
            <Box as="details">
              <Box as="summary">How much does it cost?</Box>
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderColor: "slate",
                  mt: 2,
                  pt: 2,
                }}
              >
                Nothing! We’ll have meals, snacks, and beverages onsite at the
                hackathon, as well as swag, prizes, and fun mini-events.
              </Box>
            </Box>
          </Grid>
        </Card>
        <Container variant="copy" mt={5}>
          <Box
            sx={{ fontSize: 3, textAlign: "center", fontWeight: 500, mb: 2 }}
          >
            We look forward to meeting you at Epoch,
          </Box>
          {Object.entries(signatures).map(([name, gh]) => (
            <Signature
              src={`http://shhhhhhhh.hackclub.dev/signatures/${name}.png`}
              href={`https://github.com/${gh}`}
            />
          ))}
          <Box
            sx={{
              textAlign: "center",
              lineHeight: "1.5",
              mt: 4,
              opacity: "0.8",
              transition: "linear 0.3s",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            An event crafted by the{" "}
            <Link href="https://hackclub.com" target="_blank">
              Hack Club
            </Link>{" "}
            community, email us at{" "}
            <Link href="mailto:epoch@hackclub.com" target="_blank">
              epoch@hackclub.com
            </Link>
            .
            <br /> Source code open sourced at{" "}
            <Link href="https://github.com/hackclub/www-epoch" target="_blank">
              hackclub/www-epoch
            </Link>{" "}
            and finances released on{" "}
            <Link href="https://bank.hackclub.com/epoch" target="_blank">
              Hack Club Bank
            </Link>
            .
            <Image
              src="https://assets.hackclub.com/flag-standalone-bw.png"
              sx={{
                width: "100px",
                mt: 4,
                filter: "invert(1)",
                textAlign: "center",
              }}
            />
          </Box>
        </Container>
      </Box>
      <style>
        {`
        
        .title {
          font-family: Times New Roman;
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

const signatures = {
  belle: "bellesea",
  benjamin: "bashbaugh",
  charlie: "tetraoxygen",
  ella: "exu3",
  hugo: "Hugoyhu",
  ian: "YodaLightsabr",
  ishan: "quackduck",
  pranav: "pranavnt",
  sam: "sampoder",
};

const Signature = ({ href, src, style }) => (
  <a href={href} target="_blank">
    <img
      src={src}
      style={{
        maxWidth: "5em",
        minWidth: "25%",
        filter: "invert(1)",
      }}
    />
  </a>
);
