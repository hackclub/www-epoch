import theme from "@hackclub/theme";
import { Box, Card, Grid, Heading, Text } from "theme-ui";

export default function Glossary() {
  return (
    <Box
      sx={{
        background: theme.util.gx("purple", "rgb(157,58,249)"),
        color: "white",
        lineHeight: 1.5,
        textAlign: "left",
        textAlign: "center",
        p: 4,
      }}
    >
      <Grid sx={{ width: "100%", textAlign: "left" }}>
        <Heading sx={{ color: "white", fontSize: [3, 5, 5] }}>
          Everything You Kneed To Know
        </Heading>
        <Grid columns={2}>
          <Grid sx={{height: 'fit-content'}}>
            <GlossaryItem
              question={`What's Hack Club all about?`}
              answer={`Epoch is run by Hack Club, a worldwide community of high school hackers
          and after-school coding clubs. It's backed by the likes of Elon Musk, Vitalik Buterin 
          and Tom Preston-Werner. Last summer, we organized Assemble, a 42-hour hackathon with 175 
          teenagers, in San Francisco.`}
            />
            <GlossaryItem
              question={`Am I eligible to participate in Epoch?`}
              answer={
                <>
                  If you're eighteen or under, yes, we are so excited to see you
                  in Cyber City! If you're over 18 but still in high school,
                  shoot us a mail at{" "}
                  <a
                    style={{ color: "black" }}
                    href="mailto:epoch@hackclub.com"
                  >
                    epoch@hackclub.com
                  </a>
                  .
                </>
              }
            />
            <GlossaryItem
              question={`I don't live nearby, what should I do?`}
              answer={
                <>
                  We're providing travel stipends to both domestic and
                  international attendees. Please request one on the
                  registration form if needed. If you're traveling
                  internationally, we have prepared this{" "}
                  <a style={{ color: "black" }} href="">
                    guide
                  </a>{" "}
                  to help you.
                </>
              }
            />
            <GlossaryItem
              question={`What do I need to bring to Epoch?`}
              answer={`Your laptop, chargers, anything for your hack (hardware?),
          toiletries, sleeping bags, and an open mind.`}
            />

            <GlossaryItem
              question="I'm not that good at coding, can I join?"
              answer={
                <>
                  This hackathon is for hackers of all skill levels! We'll have
                  workshops and other events so join us and let's learn
                  together. If you'd like to start exploring some introductory
                  projects, check out{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://workshops.hackclub.com"
                  >
                    Hack Club Workshops
                  </a>{" "}
                  .
                </>
              }
            />
          </Grid>
          <Grid sx={{height: 'fit-content'}}>
            <GlossaryItem
              question={`Does participating cost anything?`}
              answer={`Nothing! We’ll have meals, snacks, and beverages onsite at the
            hackathon, as well as swag, prizes, and fun mini-events.`}
            />
            <GlossaryItem
              question="What can I make at Epoch?"
              answer={
                <>
                  Anything! Apps, art, sites, and hardware projects are all
                  perfect for a hackathon. Check out what{" "}
                  <a style={{ color: "black" }} href="https://hackclub.com/">
                    Hack Clubbers
                  </a>{" "}
                  are{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://hackclub.com/ship/"
                  >
                    making every day
                  </a>
                  !
                </>
              }
            />
            <GlossaryItem
              question="What are the sleeping arrangements?"
              answer={
                <>
                  On both nights we will have a designated sleeping area in the
                  venue with low lights and minimal sound for you to rest! Make
                  sure to bring a sleeping bag!
                </>
              }
            />
            <GlossaryItem
              question="My parents are worried! How can I convince them?"
              answer={
                <>
                  We're here to help, ask them to reach out to us at{" "}
                  <a
                    style={{ color: "black" }}
                    href="mailto:epoch@hackclub.com"
                  >
                    epoch@hackclub.com
                  </a>{" "}
                  and we'll make sure to answer all their questions. Epoch will
                  be supervised by background checked staff and overseen by 24/7
                  security staff.
                </>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
function GlossaryItem({ question, answer }) {
  return (
    <Box
      sx={{
        bg: "white",
        color: "rgba(0,0,0,0.6)",
        py: 2,
        px: 3,
        borderRadius: 4,
      }}
    >
      <Box as="details">
        <Box as="summary">
          <Text color="black" sx={{ fontSize: 2, pl: 1 }}>
            {question}
          </Text>
        </Box>
        <Box
          sx={{
            mt: 2,
            color: "black",
          }}
        >
          {answer}
        </Box>
      </Box>
    </Box>
  );
}
