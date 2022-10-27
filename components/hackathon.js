import { Box, Card, Heading, Text, Grid, Flex } from "theme-ui";
import Icon from "@hackclub/icons";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import AssembleTwo from "../public/assemble2.jpeg";
import AssembleThree from "../public/assemble3.jpeg";
import AssembleFour from "../public/assemble4.jpeg";
import theme from "@hackclub/theme";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const Tag = ({ content }) => {
  return (
    <Text
      sx={{
        background: "muted",
        color: "white",
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
    <Grid columns={2}>
      <Box
        sx={{
          color: "dark",
          lineHeight: 1.5,
          textAlign: "left",
          margin: "auto",
          maxWidth: "800px",
          my: 5,
          px: 4,
          py: 3,
        }}
      >
        <Heading sx={{ fontSize: [4, 5, 5], mb: 3 }}>
          hackathon /ˈhakəθɒn/
        </Heading>
        <Box sx={{ fontSize: [2, 3, 3], width: "100%" }}>
          <Tag content="noun" /> <Tag content="informal" /> a social coding
          event where teens come together to build projects in a weekend and
          share them with the world.
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
                fontSize: 1,
              }}
            >
              <Icon glyph="attachment" size={16} />
              inside-a-hackathon.mp4
            </Text>
            <MuxPlayer
              streamType="on-demand"
              playbackId="udmg1CkLvMlL01yo3jmE7bs02A00Wh8MjcgJKVQtyLah300"
            />
          </Box>
        </Box>
      </Box>
      <Flex sx={{ flexDirection: "column", height: "100%" }}>
        {[
          [AssembleTwo, theme.colors.red, "175 Hackers"],
          [AssembleThree, theme.colors.blue, "42 Hours"],
          [
            AssembleFour,
            theme.colors.green,
            <Text sx={{ display: "inline-flex", gap: 2, alignItems: 'center' }}>
              <Text sx={{fontSize: '1.3em'}}>∞</Text> Creativity</Text>,
          ],
        ].map((x) => (
          <Box
            sx={{
              position: "relative",
              height: "100%",
            }}
          >
            <Box
              sx={{
                zIndex: 999,
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `linear-gradient(90deg, rgba(${
                  hexToRgb(x[1]).r
                },${hexToRgb(x[1]).g},${hexToRgb(x[1]).b},0.5) 0%, rgba(${
                  hexToRgb(x[1]).r
                },${hexToRgb(x[1]).g},${hexToRgb(x[1]).b},0.5) 100%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&>.external": {
                  opacity: 0,
                  transition: "opacity 0.3s",
                },
                ":hover": {
                  "&>.external": {
                    opacity: 1,
                    transition: "opacity 0.2s",
                  },
                },
              }}
            >
              <Heading
                sx={{
                  fontSize: "7.5vw",
                  WebkitTextStroke: "white",
                  WebkitTextStrokeWidth: ["2px", "3px"],
                  WebkitTextFillColor: "transparent",
                }}
              >
                {x[2]}
              </Heading>
            </Box>
            <Image
              placeholder="blur"
              src={x[0]}
              layout="fill"
              objectFit="cover"
              className="next-image"
            />
          </Box>
        ))}
      </Flex>
    </Grid>
  );
}
