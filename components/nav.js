import { Flex, Heading, Image, Box, Link } from 'theme-ui'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import theme from '@hackclub/theme'

export const Nav = () => {
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()
  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        if (latest > 0.1) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          })
        }
        if (latest == 0) {
          controls.start({
            opacity: 0,
            transition: { duration: 0.5 },
          })
        }
      }),
    []
  )
  return (
    <motion.div
      id="nav"
      style={{
        background: theme.colors.darker,
        color: 'white',
        alignItems: 'center',
        gap: '16px',
        padding: '4px 16px',
        position: 'fixed',
        top: 0,
        zIndex: 999,
        width: '100%',
        display: 'flex',
        opacity: 0,
      }}
      animate={controls}
    >
      <Heading
        p={2}
        target="_blank"
        sx={{
          flexGrow: [1, 0],
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'white',
          textAlign: 'left',
        }}
      >
        <Link
          href="#letter"
          sx={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            width: '117px',
          }}
        >
          <Image
            src="https://assets.hackclub.com/flag-standalone.png"
            sx={{ height: '32px', cursor: 'pointer' }}
          />
        </Link>
      </Heading>
      <Heading
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          color: 'muted',
          textTransform: 'uppercase',
          display: ['none', 'block'],
        }}
      >
        Epoch, Dec. 30th to Jan. 1st
      </Heading>
      <Box
        as="a"
        href={'#register'}
        sx={{ color: 'white', textDecoration: 'none' }}
      >
        <Heading
          as="h3"
          bg={`#FF4794`}
          sx={{
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: [null, '16px', '20px'],
            fontFamily: "'Phantom Sans'",
            py: 2,
            px: 3,
          }}
        >
          REGISTER
        </Heading>
      </Box>
    </motion.div>
  )
}
