import { Box, Image } from "theme-ui";

export default function Expectations() {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "800px",
        mt: 5,
        fontSize: 4,
      }}
    >
      50+ of us have come together to put this event together! If you're
      wondering what attending Epoch will be like, Here's
      what Hack Clubbers told us you could expect:
      <SlackMessage
        username={`tejasag`}
        message={`Before my first hackathon, I'd never been in a room with fellow
      teenagers who found in joy in programming. That's what you have
      at a hackathon and it's magical.`}
      />
      <SlackMessage
        username={`maggie-j-liu`}
        message={`Before my first hackathon, I'd never been in a room with fellow
      teenagers who found in joy in programming. That's what you have
      at a hackathon and it's magical.`}
      />
      <SlackMessage
        username={`Nilaany`}
        image={`https://github.com/Nilaany26.png`}
        message={`Before my first hackathon, I'd never been in a room with fellow
      teenagers who found in joy in programming. That's what you have
      at a hackathon and it's magical.`}
      />
      <SlackMessage
        username={`khalby786`}
        message={`Before my first hackathon, I'd never been in a room with fellow
      teenagers who found in joy in programming. That's what you have
      at a hackathon and it's magical.`}
      />
    </Box>
  );
}

function SlackMessage({ username, message, image }) {
  return (
    <Box
      sx={{
        background: "#000",
        display: "flex",
        fontFamily: "Noto Sans",
        border: "1px solid white",
        borderRadius: 8,
        overflow: "hidden",
        mt: 4,
        p: 3,
        gap: 3,
        fontSize: 2,
      }}
    >
      <Image
        src={image ? image : `https://github.com/${username}.png`}
        sx={{
          borderRadius: 7,
          height: "84px",
          width: "84px",
          flexShrink: "0",
        }}
      />
      <Box>
        <b>@{username}</b>
        <Box mt={2} sx={{ lineHeight: "1.3" }}>
          {message}
        </Box>
      </Box>
    </Box>
  );
}
