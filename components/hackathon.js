import { Box, Card, Heading, Text } from "theme-ui";
import Icon from "@hackclub/icons";
import MuxPlayer from "@mux/mux-player-react";

const Tag = ({ content }) => {
  return (
    <Text
      sx={{
        background: "white",
        color: "black",
        display: "inline-block",
        py: 1,
        px: 2,
        borderRadius: 4,
        fontSize: [1, 2, 2],
      }}
    >
      {content}
    </Text>
  );
};

export default function Hackathon() {
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
        mt: 5,
      }}
    >
      <Heading sx={{ color: "white", fontSize: [4, 5, 5], mb: 3 }}>
        hackathon /ˈhakəθɒn/
      </Heading>
      <Box sx={{ fontSize: [2, 3, 3], width: "100%" }}>
        <Tag content="noun" /> <Tag content="informal" /> a social coding event
        where teens come together to build projects in a weekend and share them
        with the world.
        <Box sx={{ position: "relative", mt: 3 }}>
          <Text
            sx={{
              background: "white",
              color: "black",
              display: "flex",
              alignItems: "center",
              py: 1,
              px: 2,
              borderRadius: 4,
              gap: "6px",
              // fontSize: ["0.75em", 3, 3],
              pr: 3,
              mt: [0.5, 2, 2],
              ml: [0.5, 2, 2],
              width: "fit-content",
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 998,
            }}
          >
            <Icon glyph="attachment" size={24} />
            inside-a-hackathon.mp4
          </Text>
          <MuxPlayer
            streamType="on-demand"
            playbackId="udmg1CkLvMlL01yo3jmE7bs02A00Wh8MjcgJKVQtyLah300"
          />
        </Box>
      </Box>
    </Card>
  );
}
