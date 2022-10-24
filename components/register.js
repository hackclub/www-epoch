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
          width: "800px",
          mt: 4,
          fontSize: 4,
        }}
      >
        Teenagers interested in technology: there's no better place to be this
        New Year's than at Epoch. Sign up today to join us for an adventure like
        none other.
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
              including meals, costs nothing and travel stipends are available.
            </Box>
            <Input
              placeholder="Name"
              sx={{
                color: "white",
                border: "1px solid",
                borderColor: "slate",
              }}
              onChange={e => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              sx={{
                color: "white",
                border: "1px solid",
                borderColor: "slate",
              }}
              onChange={e => setEmail(e.target.value)}
            />
            <Button 
              as="a" 
              sx={{
                  filter: (name != "" && email != "") ? `grayscale(0)` : `grayscale(1)`,
                  pointerEvents: (name != "" && email != "") ? `none` : `default`
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
