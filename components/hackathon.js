import Icon from '@hackclub/icons'
import MuxPlayer from '@mux/mux-player-react'
import Image from 'next/image'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'
import AssembleTwo from '../public/assemble2.jpg'
import AssembleThree from '../public/assemble3.jpg'
import AssembleFour from '../public/assemble4.jpg'

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const Tag = ({ content }) => {
  return (
    <Text
      sx={{
        background: 'muted',
        color: 'white',
        display: 'inline-block',
        py: 1,
        px: 2,
        borderRadius: 4,
        fontSize: [1, 2, 2],
      }}
    >
      {content}
    </Text>
  )
}

export default function Hackathon() {
  return (
    <Grid columns={[1, 2]}>
      <Box
        sx={{
          color: 'white',
          lineHeight: 1.5,
          textAlign: 'left',
          margin: 'auto',
          maxWidth: '800px',
          my: 5,
          px: 4,
          py: 3,
        }}
      >
        <Heading
          as="div"
          sx={{
            fontSize: ['13vw', '7.4vw'],
            mb: [0, '-10px'],
            WebkitTextStroke: 'white',
            WebkitTextStrokeWidth: '0.7px',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Hackathon?
        </Heading>
        <Heading
          sx={{
            fontSize: ['13vw', '7.4vw'],
            mb: 2,
            textShadow: `0px 0px 40.4900016784668px rgba(255, 71, 148, 1),
                          0px 0px 64.9800033569336px rgba(255, 71, 148, 0.9),
                          0px 0px 210.42999267578125px rgba(255, 71, 148, 0.8),
                          0px 0px 200.8599853515625px rgba(255, 71, 148, 0.7)`,
            position: 'relative',
            zIndex: '500',
          }}
        >
          Hackathon.
        </Heading>
        <Box sx={{ fontSize: [2, 3, 3], width: '100%', mt: 3 }}>
          Epoch is a social coding event where teens come together for a weekend
          to discover the joy of code, build creative projects and share their
          projects with the world.
          <Box sx={{ position: 'relative', mt: 3 }}>
            <Text
              sx={{
                background: 'white',
                color: 'black',
                display: ['none', 'flex'],
                alignItems: 'center',
                py: 1,
                px: 2,
                borderRadius: 4,
                gap: '6px',
                // fontSize: ["0.75em", 3, 3],
                pr: 3,
                mt: [0.5, 2, 2],
                ml: [0.5, 2, 2],
                width: 'fit-content',
                position: 'absolute',
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
      <Flex sx={{ flexDirection: 'column', height: ['80vh', '100%'] }}>
        {[
          [AssembleTwo, '#FF4794', '175 Hackers'],
          [AssembleThree, '#D63AF9', '42 Hours'],
          [
            AssembleFour,
            '#9d3af9',
            <Text sx={{ display: 'inline-flex', gap: 2, alignItems: 'center' }}>
              <Text sx={{ fontSize: '1.3em', fontFamily: '"Phantom Sans"' }}>
                ∞
              </Text>{' '}
              Creativity
            </Text>,
          ],
        ].map((x, i) => (
          <Box
            key={i}
            sx={{
              position: 'relative',
              height: '100%',
            }}
          >
            <Box
              sx={{
                zIndex: 990,
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `linear-gradient(90deg, rgba(${
                  hexToRgb(x[1]).r
                },${hexToRgb(x[1]).g},${hexToRgb(x[1]).b},0.5) 0%, rgba(${
                  hexToRgb(x[1]).r
                },${hexToRgb(x[1]).g},${hexToRgb(x[1]).b},0.5) 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&>.external': {
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                ':hover': {
                  '&>.external': {
                    opacity: 1,
                    transition: 'opacity 0.2s',
                  },
                },
              }}
            >
              <Heading
                as="h3"
                sx={{
                  fontSize: ['12vw', '6vw'],
                  WebkitTextStroke: 'white',
                  WebkitTextStrokeWidth: ['0px', '2px'],
                  WebkitTextFillColor: ['white', 'transparent'],
                  textTransform: 'uppercase',
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
  )
}
