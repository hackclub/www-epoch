import { Box, Grid } from "theme-ui";
import FilmGrain from "../components/filmGrain";

export default function Foreword() {
  return (
    <>
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
          With every new year, comes new possibilities, adventures, and memories
          around the world.
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
    </>
  );
}
