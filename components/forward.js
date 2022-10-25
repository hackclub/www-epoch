import { Box, Grid, Heading, Image, Link } from "theme-ui";
import FilmGrain from "../components/filmGrain";
import { Text, Button } from "theme-ui";
import { useState } from "react";

function Modal(props) {
  return (
    <Box
      sx={{
        display: props.open == false ? "none" : "flex",
        position: "fixed",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999",
        top: 0,
        background: `rgba(0, 0, 0, 0.7)`,
      }}
      onClick={() => props.setOpen(false)}
    >
      <Box
        sx={{
          width: "90vw",
          maxWidth: "800px",
          bg: "black",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <Box
          bg={props.data.colour}
          px={3}
          pb={2}
          pt={"12px"}
          sx={{ fontSize: 3, fontWeight: 700 }}
        >
          {props.data.title}
        </Box>
        <Box
          p={3}
          sx={{
            fontSize: "18px",
            border: "3px solid",
            borderColor: props.data.colour,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        >
          {props.data.description}
        </Box>
      </Box>
    </Box>
  );
}

export default function Forward() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  let modalData = {
    0: {
      title: "Organised by the Hack Club community, for you.",
      description: (
        <Grid columns="2fr 1fr">
          <Box>
            Hack Club is a worldwide community of high school hackers. We’re
            artists, writers, engineers, tinkerers, campers, filmmakers,
            volunteers. We make things. We help one another. We have fun.
            <br /> <br />
            Epoch has been organised by the community in public on the{" "}
            <Link href="https://hackclub.com/slack" target="_blank">
              Hack Club Slack
            </Link>
            . Everything from this website to Epoch's dinner menu, was created
            by teenagers just like yourself and you're welcome to help out in{" "}
            <i>#epoch-bts</i> on{" "}
            <Link href="https://hackclub.com/slack" target="_blank">
              the Slack
            </Link>
            .
          </Box>
          <Image
            src="https://cloud-ajzzyogfc-hack-club-bot.vercel.app/0screenshot_2022-10-25_at_5.46.44_pm.png"
            sx={{ borderRadius: 6 }}
          />
        </Grid>
      ),
      colour: "red",
    },
    1: {
      title: "Cyber City, Delhi NCR",
      description: (
        <Grid columns={2}>
          <Box sx={{ lineHeight: "1.6" }}>
            <b>Epoch is taking place at:</b>
            <br />
            Masters' Union School of Business
            <br />
            G33R+29P, Phase II,
            <br />
            Udyog Vihar, Sector 20,
            <br />
            Gurugram, Haryana 122022, India
            <Grid columns={2} mt={2}>
              <Image
                sx={{ borderRadius: 2, objectFit: "cover" }}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyber_City_Skyline.jpeg"
                height="200px"
              />
              <Image
                sx={{ borderRadius: 2, objectFit: "cover", height: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cyber_City_View.jpg/2560px-Cyber_City_View.jpg"
                height="200px"
              />
            </Grid>
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14024.938975122483!2d77.0909444!3d28.5025843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae4dc02e39c2931f!2sMasters&#39;%20Union%20School%20of%20Business!5e0!3m2!1sen!2ssg!4v1666690637009!5m2!1sen!2ssg"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      ),
      colour: "orange",
    },
    2: {
      title: "₹12.5 Lakh in travel stipends",
      description: (
        <>
          Epoch is for hackers across India and the world; with that in mind,
          we're providing ₹12.5 lakh in travel stipends to both domestic and
          international attendees. We'll cover the full cost of a return flight
          to New Delhi for stipend recipients in India and provide a USD 500
          stipend to international stipend recipients.
          <br /> <br />
          Those interested in a travel stipend can request one on the
          registration form.
        </>
      ),
      colour: "purple",
    },
  };
  return (
    <>
      <Modal open={open} data={modalData[index]} setOpen={setOpen} />
      <Box>
        <Heading
          className="title"
          sx={{
            margin: "auto",
            width: ["auto", "800px", "800px"],
            // width: "800px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          EPOCH
          <FilmGrain />
        </Heading>
        <Box
          sx={{
            margin: "auto",
            width: ["auto", "800px", "800px"],
            mt: "-16px",
            mb: 4,
            fontSize: [2, 3, 3],
            overflow: "hidden",
          }}
        >
          <p>
            With every new year comes new possibilities, adventures, and
            memories.
          </p>
          <p>
            This coming new year, 150+ teenage hackers will welcome in 2023
            together at a high-school hackathon unlike anything Asia has seen
            before.
          </p>
          <b>All are welcome; RSVP today or read on for more.</b>
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
          <Box
            onClick={() => setOpen(true)}
            sx={{ padding: "16px", background: "green", borderRadius: 4 }}
          >
            December 30th to January 1st
          </Box>
          <Box
            onClick={() => setOpen(true)}
            sx={{ padding: "16px", background: "blue", borderRadius: 4 }}
          >
            Doors open at 6PM
          </Box>
          <Box
            onClick={() => {
              setIndex(1);
              setOpen(true);
            }}
            sx={{ padding: "16px", background: "orange", borderRadius: 4 }}
          >
            Cyber City, Delhi NCR
          </Box>
          <Box
            onClick={() => {
              setIndex(2);
              setOpen(true);
            }}
            sx={{ padding: "16px", background: "purple", borderRadius: 4 }}
          >
            ₹12.5 Lakh in travel stipends
          </Box>
          <Box
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
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
      </Box>
    </>
  );
}
