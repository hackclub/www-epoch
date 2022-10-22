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
      50+ of us have came together to put this event together, you may be
      wondering what attending Epoch will be like. When we asked around, here's
      what folks told us you could expect:
      <SlackMessage
        username={`tejasag`}
        message={`My first hackathon was 2 days of coding with like-minded individuals and free food. I am still wondering whether it was really a hackathon or paradise.`}
      />
      <SlackMessage
        username={`maggie-j-liu`}
        image={`/pfps/maggie.png`}
        message={`At my first in-person hackathon, I met so many students who not only loved to code, but were super friendly. Chatting with other attendees as we walked to lunch or worked on projects was such an amazing experience 😄.`}
      />
      <SlackMessage
        username={`nilaany`}
        image={`https://github.com/Nilaany26.png`}
        message={`Before my first hackathon, I'd never been in a room with fellow
      teenagers who found in joy in programming. That's what you have
      at a hackathon and it's magical.`}
      />
      <SlackMessage
        username={`khalby786`}
        image={`/pfps/khalby786.JPG`}
        message={`Hackathons are a magical experience, meeting like-minded people from 
        different parts of the world and teaming up with them to create technical projects! We share knowledge, stickers, 
        jokes and snacks, I'll never get tired of those.`}
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
          objectFit: "cover"
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
