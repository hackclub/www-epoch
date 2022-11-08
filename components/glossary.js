import theme from "@hackclub/theme";
import { Box, Card, Grid, Heading, Text, Image, Link } from "theme-ui";

export default function Glossary() {
  return (
    <Box
      sx={{
        background: "#eee",
        color: "black",
        lineHeight: 1.5,
        textAlign: "left",
        textAlign: "center",
        px: [3, 4],
        py: [4, 5],
      }}
    >
      <Grid sx={{ width: "100%", textAlign: "left" }}>
        <Heading
          sx={{
            color: "black",
            fontSize: ["12vw", 5, 6],
            textDecoration: "underline",
            fontFamily: `"Phantom Sans"`,
            mb: [1, 3],
            textAlign: 'center'
          }}
        >
          Everything You Need To Know
        </Heading>
        <Grid>
          <Grid
            sx={{
              bg: "white",
              color: "slate",
              p: [3,4],
              borderRadius: 4,
              border: "0.7px solid",
              borderColor: "slate",
              fontSize: ["18px",2],
            }}
            columns={[1,2]}
          >
            <Box>
              <b>Venue:</b> Masters' Union <br />
              Tower C, DLF Cyberpark, <br />
              Phase II, Udyog Vihar, Sector 20,
              <br />
              Gurugram, Delhi NCR
              <Grid columns={2} mt={2} sx={{ width: "80%", display: ['none!important', 'grid!important'] }}>
                <Image
                  sx={{ borderRadius: 2, objectFit: "cover", height: '140px'  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyber_City_Skyline.jpeg"
                  height="200px"
                />
                <Image
                  sx={{ borderRadius: 2, objectFit: "cover", height: '140px' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cyber_City_View.jpg/2560px-Cyber_City_View.jpg"
                  height="200px"
                />
              </Grid>
            </Box>
            <Box sx={{height: ["min-content", "100%"]}}>
              <Box as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.958571415423!2d77.08833522748132!3d28.501816482248387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1948a901da95%3A0x4a34e5bb6daab881!2sDLF%20CYBER%20PARK!5e0!3m2!1sen!2ssg!4v1667220038598!5m2!1sen!2ssg"
                height={["90%", "100%"]}
                width="100%"
                sx={{ border: "0", minHeight: ["100px","300px"] }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Box>
            </Box>
          </Grid>
          <Grid columns={[1,2]}>
          <Box
            sx={{
              bg: "white",
              color: "slate",
              p: [3,4],
              borderRadius: 4,
              border: "0.7px solid",
              borderColor: "slate",
              fontSize: ["18px",2],
            }}
            columns="1fr 1fr"
          >
            <Box mb={2}>
              <b>₹12.5 Lakh in Travel Stipends: </b>Epoch is for hackers across
              India and the world; with that in mind, we're providing ₹12.5 lakh
              in travel stipends to both domestic and international attendees.
              
            </Box>
            <Box>
            We'll cover the full cost of a return flight to New Delhi for
              stipend recipients in India and provide a USD 500 stipend to
              recipients outside of India. Travel stipends can be requested
              on the registration form below.
            </Box>
          </Box>
          <Box
            sx={{
              bg: "white",
              color: "slate",
              p: [3,4],
              borderRadius: 4,
              border: "0.7px solid",
              borderColor: "slate",
              fontSize: ["18px",2],
            }}
            columns="1fr 1fr"
          >
            <Box>
              <Box mb={2}>
                <b>Hack Club</b> is a worldwide community of high school
                hackers. We’re artists, writers, engineers, tinkerers, campers,
                filmmakers, volunteers. We make things. We help one another. We
                have fun.
              </Box>
              <Box>
                Epoch is fully open source, funded by, and  run by the Hack Club community. 
                Hack Clubbers are organising Epoch in public on the{" "}
                  <Link href="https://hackclub.com/slack" target="_blank">
                  Hack Club Slack
                </Link> 
                {" "}and with fully transparent finances using{" "}
                <Link href="https://bank.hackclub.com/epoch" target="_blank">
                  Hack Club Bank
                </Link>.
                Everything from this website to Epoch's dinner menu, was
                created by teenagers just like yourself and you're welcome to
                help out in <i>#epoch-bts</i> on{" "}
                <Link href="https://hackclub.com/slack" target="_blank">
                  the Slack
                </Link>
                .
              </Box>
            </Box>
          </Box></Grid>
        </Grid>
        <Grid columns={[1, 2]}>
          <Grid sx={{ height: "fit-content" }}>
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
                    target="_blank"
                  >
                    Hack Club Workshops
                  </a>{" "}
                  .
                </>
              }
            />
            <GlossaryItem
              question="My parents are worried! What should I do?"
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
                  security staff. <b>Read more in our 
                  <a
                    style={{ color: "black" }}
                    href="https://hack.af/epoch-parents"
                  >
                    parent's guide
                  </a>.</b>
                </>
              }
            />
          </Grid>
          <Grid sx={{ height: "fit-content" }}>
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
                  <a 
                    style={{ color: "black" }} 
                    href="https://hackclub.com/"
                    target="_blank"
                  >
                    Hack Clubbers
                  </a>{" "}
                  are{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://hackclub.com/ship/"
                    target="_blank"
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
              question="I have more questions, how can I reach out?"
              answer={
                <>
                  Contact us! Reach out on #epoch on the{" "}
                  <a 
                    style={{ color: "black" }}
                    href="https://hackclub.com/slack"
                    target="_blank"
                  >
                    Hack Club Slack
                  </a>
                  {" "}or email us at {" "}
                  <a
                    style={{ color: "black" }}
                    href="mailto:epoch@hackclub.com"
                  >
                    epoch@hackclub.com
                  </a>{" "}
                  We're always ready to answer all your questions!
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
        color: "slate",
        py: 2,
        px: 3,
        borderRadius: 4,
        border: "0.7px solid",
        borderColor: "slate",
        fontSize: ["18px",2]
      }}
    >
      <Box as="details">
        <Box as="summary">
          <Text color="black" sx={{ fontSize: ["18px", 2], pl: 1 }}>
            {question}
          </Text>
        </Box>
        <Box
          sx={{
            mt: 2,
            mb:[2,0],
            color: "black",
          }}
        >
          {answer}
        </Box>
      </Box>
    </Box>
  );
}

