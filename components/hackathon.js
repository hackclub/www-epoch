import { Box, Card, Heading, Text } from "theme-ui";
import Icon from "@hackclub/icons";
import MuxPlayer from "@mux/mux-player-react";

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
      <Heading sx={{ color: "white", fontSize: 5, mb: 3 }}>
        hackathon /ˈhakəθɒn/
      </Heading>
      <Box sx={{ fontSize: 3, width: "100%" }}>
        <Text
          sx={{
            background: "white",
            color: "black",
            display: "inline-block",
            py: 1,
            px: 2,
            borderRadius: 4,
            fontSize: 2,
          }}
        >
          noun
        </Text>{" "}
        <Text
          sx={{
            background: "white",
            color: "black",
            display: "inline-block",
            py: 1,
            px: 2,
            borderRadius: 4,
            fontSize: 2,
          }}
        >
          informal
        </Text>{" "}
        a social coding event where teens come together to build projects in a
        weekend and share them with the world.
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
              fontSize: 3,
              pr: 3,
              mt: 2,
              ml: 2,
              width: "fit-content",
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 999,
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
