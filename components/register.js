import { Box, Card, Grid, Heading, Input, Button } from "theme-ui";

export default function Register() {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: ["auto", "800px", "800px"],
          mt: 4,
          fontSize: [3, 4, 4],
        }}
      >
        Teenagers interested in technology: there's no better place to be this
        New Years than at Epoch. Sign up today to join us for an adventure like
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
        <Box sx={{ fontSize: [2, 3, 3], width: "100%" }}>
          <Grid>
            <Heading
              sx={{ color: "white", fontSize: [3, 4, 4], textAlign: "left" }}
            >
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
            <Button
              sx={{
                fontSize: [1, 2, 2],
              }}
            >
              Finish More 11 Fields To Register
            </Button>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
