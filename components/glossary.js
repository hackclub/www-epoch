import { Box, Card, Grid, Heading } from "theme-ui";

export default function Glossary() {
  return (
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
        <Heading sx={{ color: "white", fontSize: [3, 4, 4] }}>
          The Glossary
        </Heading>
        <GlossaryItem
          question={`Who is behind Epoch?`}
          answer={`Epoch is run by Hack Club, a worldwide community of high school hackers
          and after-school coding clubs. It's backed by the likes of Elon Musk, Vitalik Buterin 
          and Tom Preston-Werner. Last summer, we organized Assemble, a 42-hour hackathon with 175 
          teenagers, in San Francisco.`}
        />
        <GlossaryItem
          question={`Can I join Epoch?`}
          answer={<>If you're eighteen or under, yes, we are so excited to see you in
          Cyber City! If you're over 18 but still in high school, shoot us a
          mail at <a style={{ color: 'white' }} href="mailto:epoch@hackclub.com">
                epoch@hackclub.com
              </a>.<>}
        />
        <GlossaryItem
          question={`I don't live in Delhi and can't pay for travel...`}
          answer={`We're providing travel stipends to both domestic and international attendees. 
          Please request one on the registration form if needed. If you're travelling internationally, 
          we can also support with the visa process.`}
          answer={
            <>
              We're providing travel stipends to both domestic and international
              attendees. Please request one on the registration form if needed.
              If you're travelling internationally, we have prepared this{' '}
              <a
                style={{ color: 'white' }}
                href=""
              >
                guide
              </a>{' '}
              to help you.
            </>
          }
        />
        <GlossaryItem
          question={`What do I need?`}
          answer={`Your laptop, chargers, anything for your hack (hardware?),
          toiletries, sleeping bags, and an open mind.`}
        />
        <GlossaryItem
          question="How much does it cost?"
          answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
        />
        <GlossaryItem
          question="I'm not that good at coding..."
          answer={
            <>
              This hackathon is for hackers of all skill levels! We'll have
              workshops and other events so join us and let's learn together. If
              you'd like to start exploring some introductory projects, check
              out{' '}
              <a
                style={{ color: 'white' }}
                href="https://workshops.hackclub.com"
              >
                Hack Club Workshops
              </a>{' '}
              .
            </>
          }
        />
        <GlossaryItem
          question="I'm not that good at coding..."
          answer={
            <>
              This hackathon is for hackers of all skill levels! We'll have
              workshops and other events so join us and let's learn together. If
              you'd like to start exploring some introductory projects, check
              out{' '}
              <a
                style={{ color: 'white' }}
                href="https://workshops.hackclub.com"
              >
                Hack Club Workshops
              </a>{' '}
              .
            </>
          }
        />
        <GlossaryItem
          question={`How much does it cost?`}
          answer={`Nothing! We’ll have meals, snacks, and beverages onsite at the
            hackathon, as well as swag, prizes, and fun mini-events.`}
        />
        <GlossaryItem
          question="What can I make?"
          answer={
            <>
              Anything! Apps, art, sites, and hardware projects are all perfect
              for a hackathon. Check out what{' '}
              <a style={{ color: 'white' }} href="https://hackclub.com/">
                Hack Clubbers
              </a>{' '}
              are{' '}
              <a style={{ color: 'white' }} href="https://hackclub.com/ship/">
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
              On both nights we will have a designated sleeping
              area in the venue with low lights and minimal sound for you
              to rest! Make sure to bring a sleeping bag!
            </>
          }
        />
        <GlossaryItem
          question="My parents are worried!"
          answer={
            <>
              We're here to help, ask them to reach out to us at{' '}
              <a style={{ color: 'white' }} href="mailto:epoch@hackclub.com">
                epoch@hackclub.com
              </a>{' '}
              and we'll make sure to answer all their questions. Epoch will
              be supervised by background checked staff and overseen by 24/7
              security staff.
            </>
          }
        />
      </Grid>
    </Card>
  );
}
function GlossaryItem({ question, answer }) {
  return (
    <Box as="details">
      <Box as="summary">{question}</Box>
      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "slate",
          mt: 2,
          pt: 2,
        }}
      >
        {answer}
      </Box>
    </Box>
  );
}
