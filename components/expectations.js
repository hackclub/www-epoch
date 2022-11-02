import { Box, Container, Grid, Image } from 'theme-ui'

export default function Expectations() {
  return (
    <Box
      sx={{
        fontSize: [3, 4, 4],
        pt: 5,
      }}
    >
      <Box
        sx={{
          width: '800px',
          margin: 'auto',
          textAlign: 'center',
          fontWeight: 400,
          textShadow: 'elevated',
        }}
      >
        50+ Hack Clubbers have came together to organise this event, you may be
        wondering what attending Epoch will be like; here's what they told us
        you could expect:
      </Box>

      <Grid columns={2} px={4} mt={4}>
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
          message={`My first hackathon made me realize my ability to ideate projects for different prompts within a couple of hours. I loved the whole process of creating something with the wonders of coding!`}
        />
        <SlackMessage
          username={`khalby786`}
          image={`/pfps/khalby786.JPG`}
          message={`Hackathons are a magical experience, meeting like-minded people from 
        different parts of the world and teaming up with them to create technical projects! We share knowledge, stickers, 
        jokes and snacks, I'll never get tired of those.`}
        />
      </Grid>
    </Box>
  )
}

function SlackMessage({ username, message, image }) {
  return (
    <Box
      sx={{
        background: 'white',
        display: 'flex',
        border: '1px solid',
        borderColor: 'black',
        color: 'black',
        borderRadius: 8,
        overflow: 'hidden',
        p: 3,
        gap: 3,
        fontSize: [1, 2, 2],
      }}
    >
      <Image
        src={image ? image : `https://github.com/${username}.png`}
        sx={{
          borderRadius: 7,
          height: '84px',
          width: '84px',
          flexShrink: '0',
          objectFit: 'cover',
        }}
      />
      <Box>
        <b>@{username}</b>
        <Box mt={1} mb={2} sx={{ lineHeight: '1.3' }}>
          {message}
        </Box>
      </Box>
    </Box>
  )
}
