import Head from 'next/head'

const fontImport = (family, weight, file) => `
@font-face {
  font-family: '${family}';
  ${
    weight &&
    `
    font-weight: ${weight};
  `
  }
  src: url('fonts/${file}.woff2') format('woff2'),
       url('fonts/${file}.woff') format('woff'),
       url('fonts/${file}.ttf') format('truetype');
}
`

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Epoch ~ New Delhi, 30th December 2022</title>
    </Head>
    <style jsx global>{`
      html {
        background: black;
      }

      p {
        font-size: 1.5em;
      }

      pre {
        background: rgba(0, 0, 0, 0.1);
        font-size: 2em;
        border-radius: 0.5rem;
        padding: 1em;
        text-align: left;
      }

      a {
        color: inherit;
      }

      ::-moz-selection {
        color: black;
        background: #ddd;
        text-shadow: none;
      }
      ::selection {
        color: black;
        background: #ddd;
        text-shadow: none;
      }
    `}</style>
  </>
)
