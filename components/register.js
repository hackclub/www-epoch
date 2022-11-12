import theme from '@hackclub/theme'
import { useState } from 'react'
import { Box, Button, Card, Grid, Input } from 'theme-ui'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <Box
        id="register"
        sx={{
          margin: 'auto',
          width: ['90%', '800px', '800px'],
          mt: 5,
          fontSize: [3, 4, 4],
          textAlign: 'center',
          textShadow: 'elevated',
        }}
      >
        50+ Hack Clubbers have come together to organise this event;{' '}
        <b>join us on an adventure like none other.</b>
      </Box>
      <Card
        sx={{
          background: theme.util.gx('black', 'darker'),
          color: 'white',
          lineHeight: 1.5,
          border: '2px solid',
          borderColor: 'white',
          textAlign: 'left',
          margin: 'auto',
          maxWidth: ['90%', '800px'],
          mt: 4,
          textAlign: 'center',
        }}
      >
        <Box sx={{ fontSize: [2, 3, 3], width: '100%' }}>
          <Grid>
            <Box sx={{ textAlign: 'center' }}>
              Epoch is open to anyone anywhere, 18 or younger. Participation,
              including meals, costs nothing and travel stipends are available.
            </Box>
            <Input
              placeholder="Your Name"
              sx={{
                border: '1px solid',
                borderColor: 'slate',
                textAlign: 'center',
                color: 'text',
                '::placeholder': {
                  color: 'muted',
                }
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Your Email"
              sx={{
                border: '1px solid',
                borderColor: 'slate',
                textAlign: 'center',
                color: 'text',
                '::placeholder': {
                  color: 'muted',
                }
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              as="a"
              sx={{
                borderRadius: '4px',
                fontSize: [1, 2, 2],
                pointerEvents: !(name != '' && email != '')
                  ? `none`
                  : `default`,
                transition: 'background 0.2s ease-in-out',
                background: !(name != '' && email != '') ? 'transparent' : theme.util.gx('orange', 'red'),
                border: !(name != '' && email != '') ? '2px dashed red' : 'none',
              }}
              href={`https://register.epoch.hackclub.com?email=${email}&name=${name}`}
            >
              Finish {11 - (name != '' ? 1 : 0) - (email != '' ? 1 : 0)} more
              fields to register.
            </Button>
          </Grid>
        </Box>
      </Card>
    </>
  )
}
