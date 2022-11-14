import { Box, Container, Image, Link } from 'theme-ui'

export default function Closing() {
  return (
    <Container variant="copy" mt={5}>
      <Box sx={{ fontSize: 3, textAlign: 'center', fontWeight: 500, mb: 3 }}>
        We look forward to meeting you at Epoch,
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        {signatures.map((username) => (
          <Signature
            src={`/signatures/${username}.png`}
            href={`https://github.com/${username}`}
            key={username}
          />
        ))}
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          lineHeight: '1.5',
          mt: 4,
          opacity: '0.6',
          textShadow: 'elevated',
          transition: 'linear 0.3s',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        An event crafted by the{' '}
        <Link href="https://hackclub.com" target="_blank" color="white">
          Hack Club
        </Link>{' '}
        community, email us at{' '}
        <Link href="mailto:epoch@hackclub.com" target="_blank" color="white">
          epoch@hackclub.com
        </Link>
        .
        <br /> Website open sourced at{' '}
        <Link
          href="https://github.com/hackclub/www-epoch"
          target="_blank"
          color="white"
        >
          hackclub/www-epoch
        </Link>{' '}
        and finances on{' '}
        <Link
          href="https://bank.hackclub.com/epoch"
          target="_blank"
          color="white"
        >
          Hack Club Bank
        </Link>
        .<br />
        <Link
          href="https://hackclub.com/"
          target="_blank"
        >
          <Image
            src="https://cloud-d6s84nk79-hack-club-bot.vercel.app/0flag-standalone-bw_1.png"
            sx={{
              width: '100px',
              mt: 4,
              textAlign: 'center',
            }}
            alt="Hack Club Flag"
          />
        </Link>
      </Box>
    </Container>
  )
}

const signatures = [
  'sampoder',
  '0jas0jas',
  'arshshrivastavaa',
  'mahi-agarwal',
  'devenjadhav',
  'neiltheghosh',
  'nilaRam',
  'tejasag',
  'khalby786',
  'faisalsayed10',
  'arashnrim',
  'Nilaany26',
  "tregsthedev",
  "aaryanporwal",
  "ramiz03"
]

const Signature = ({ href, src, style, key }) => (
  <a href={href} target="_blank">
    <img
      alt={`Signature of ${key}, an organiser of the hackathon.`}
      src={src}
      style={{
        maxWidth: '5em',
        minWidth: '25%',
        filter: 'invert(1)',
      }}
    />
  </a>
)
