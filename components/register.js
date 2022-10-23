import { Box, Card, Grid, Heading, Input, Button } from "theme-ui";

export default function Register() {
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
            />
            <Input
              placeholder="Email"
              sx={{
                color: "white",
                border: "1px solid",
                borderColor: "slate",
              }}
            />
            <Button>Finish 11 more fields to register</Button>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
