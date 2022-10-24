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
          question={`Can I join Epoch?`}
          answer={`If you're eighteen or under, yes, we are so excited to see you in
          Cyber City! If you're over 18 but still in high school, shoot us a
          mail at epoch@hackclub.com.`}
        />
        <GlossaryItem
          question={`What do I need?`}
          answer={`Your laptop, chargers, anything for your hack (hardware?),
          toiletries, sleeping bags, and an open mind.`}
        />
        <GlossaryItem
          question={`How much does it cost?`}
          answer={`Nothing! We’ll have meals, snacks, and beverages onsite at the
            hackathon, as well as swag, prizes, and fun mini-events.`}
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
