import { Box, Container, Image, Link } from "theme-ui";

export default function Closing() {
  return (
    <Container variant="copy" mt={5}>
      <Box sx={{ fontSize: 3, textAlign: "center", fontWeight: 500, mb: 2 }}>
        We look forward to meeting you at Epoch,
      </Box>
      {Object.entries(signatures).map(([name, gh]) => (
        <Signature
          src={`http://shhhhhhhh.hackclub.dev/signatures/${name}.png`}
          href={`https://github.com/${gh}`}
        />
      ))}
      <Box
        sx={{
          textAlign: "center",
          lineHeight: "1.5",
          mt: 4,
          opacity: "0.8",
          transition: "linear 0.3s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        An event crafted by the{" "}
        <Link href="https://hackclub.com" target="_blank">
          Hack Club
        </Link>{" "}
        community, email us at{" "}
        <Link href="mailto:epoch@hackclub.com" target="_blank">
          epoch@hackclub.com
        </Link>
        .
        <br /> Source code open sourced at{" "}
        <Link href="https://github.com/hackclub/www-epoch" target="_blank">
          hackclub/www-epoch
        </Link>{" "}
        and finances released on{" "}
        <Link href="https://bank.hackclub.com/epoch" target="_blank">
          Hack Club Bank
        </Link>
        .
        <Image
          src="https://assets.hackclub.com/flag-standalone-bw.png"
          sx={{
            width: "100px",
            mt: 4,
            filter: "invert(1)",
            textAlign: "center",
          }}
        />
      </Box>
    </Container>
  );
}

const signatures = {
  belle: "bellesea",
  benjamin: "bashbaugh",
  charlie: "tetraoxygen",
  ella: "exu3",
  hugo: "Hugoyhu",
  ian: "YodaLightsabr",
  ishan: "quackduck",
  pranav: "pranavnt",
  sam: "sampoder",
};

const Signature = ({ href, src, style }) => (
  <a href={href} target="_blank">
    <img
      src={src}
      style={{
        maxWidth: "5em",
        minWidth: "25%",
        filter: "invert(1)",
      }}
    />
  </a>
);
