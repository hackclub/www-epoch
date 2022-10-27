import { Box, Card, Grid, Heading, Input, Button } from "theme-ui";
import { useState } from 'react'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: ["auto", "800px", "800px"],
          mt: 4,
          fontSize: [3, 4, 4],
          textAlign: 'center',
          textShadow: 'elevated'
        }}
      >
        Teenagers interested in technology: there's no better place to be this
        New Year's than at Epoch. {" "}<b>Register today to join Hack Club on an adventure like
        none other.</b>
      </Box>
      <Card
        sx={{
          background: "dark",
          color: "white",
          lineHeight: 1.5,
          border: "2px solid",
          borderColor: "white",
          textAlign: "left",
          margin: "auto",
          maxWidth: "800px",
          mt: 4,
          textAlign: "center",
        }}
      >
        <Box sx={{ fontSize: [2, 3, 3], width: "100%" }}>
          <Grid>
            <Box sx={{ textAlign: "center" }}>
              Epoch is open to anyone anywhere, 18 or younger. Participation,
              including meals, costs nothing and travel stipends are available.
            </Box>
            <Input
              placeholder="Your Name"
              sx={{
                color: "white",
                border: "1px solid",
                borderColor: "slate",
                textAlign: "center",
                color: 'text'
              }}
              onChange={e => setName(e.target.value)}
            />
            <Input
              placeholder="Your Email"
              sx={{
                color: "white",
                border: "1px solid",
                borderColor: "slate",
                textAlign: "center",
                color: 'text'
              }}
              onChange={e => setEmail(e.target.value)}
            />
            <Button 
              as="a" 
              sx={{
                borderRadius: '4px',
                  fontSize: [1, 2, 2],
                  filter: !(name != "" && email != "") ? `grayscale(1)` : `grayscale(0)`,
                  pointerEvents: !(name != "" && email != "") ? `none` : `default`
              }}
              href={`https://register.epoch.hackclub.dev?email=${email}&name=${name}`}
            >
              Finish {11 - (name != "" ? 1 : 0) - (email != "" ? 1 : 0)} more fields to register.
            </Button>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
