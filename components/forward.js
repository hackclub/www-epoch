import ProgressButton from './progressButton'
import FilmGrain from './filmGrain'
import Assemble from '../public/assemble.jpg'
import Assemble2 from '../public/assemble2.JPG'
import Assemble3 from '../public/assemble3.JPG'
import Assemble4 from '../public/assemble4.JPG'
import Image from 'next/image'

const containerStyle = {
  width: '100%',
  margin: 0,
  fontFamily: "'Bellefair', serif",
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  borderTop: '2px solid rgba(255, 255, 255, 0.6)',
  borderBottom: '2px solid rgba(255, 255, 255, 0.6)'
}

const supertitleStyle = {
  fontFamily: "'Bellefair', serif",
  fontStyle: 'italic',
  opacity: 0.7
}

const subtitleStyle = {
  fontSize: '1.7em',
}


const Forward = ({ index, progress, setProgress, github }) => (
  <>
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

      p,
      h1 {
        text-shadow: 0 0 0.1rem #eee;
        color: white;
      }

      button {
        animation: vertical-float;
        animation-duration: 1s;
      }

      @keyframes vertical-float {
        0% {
          transform: translateY(-10px);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(-10px);
        }
      }

      .vertical-float {
        animation: vertical-float 5s infinite !important;
      }
      .vertical-float:hover {
        animation-play-state: paused !important;
      }

      .title {
        font-family: 'Times New Roman';
        font-size: 3em;
        line-height: 1em;
        font-style: italic;
        margin-block-start: 0.2em;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 2px;
      }
      @media (min-width: 992px) {
        .title {
          font-size: 3em;
        }
      }

      .banner {
        text-align: left;
        color: white;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: 3em;
        width: 90vw;
        z-index: 2;
        overflow: hidden;
        height: calc(100vh - 6em)
      }
    `}</style>
    <div style={containerStyle}>
      <div className="blur-in banner">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 6em)' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="decorative-corner.png"
                style={{ position: 'absolute', top: '-3.2em', left: '-3.2em', opacity: 0.3 }}
              />
              <h1 className="title">
                Forward
              </h1>
              <div style={subtitleStyle}>
                <p>
                  With a new year, comes new possibilities, adventures, and memories.</p>
                <p> In 2023, hundreds of teenage hackers will welcome the new year
                  together in New Delhi at a high-school hackathon unlike anything
                  the continent has seen before.
                </p>
                All are welcome, RSVP today or read on for more.</div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 'calc(-1 * (24vh))', width: '100%' }}>
              <div style={{ height: '33vh', position: 'relative', marginBottom: '8px',borderRadius: '8px', border: '1px solid rgba(255,255,255,0.6)' }}>
                <Image src={Assemble3} style={{ borderRadius: '7px' }} objectFit="cover" layout='fill' />
              </div>
              <div style={{ height: '33vh', position: 'relative', marginBottom: '8px',borderRadius: '8px', border: '1px solid rgba(255,255,255,0.6)' }}>
                <Image src={Assemble} style={{ borderRadius: '7px' }} objectFit="cover" layout='fill' />
              </div>
              <div style={{ height: '33vh', position: 'relative', marginBottom: '8px',borderRadius: '8px', border: '1px solid rgba(255,255,255,0.6)' }}>
                <Image src={Assemble4} style={{ borderRadius: '7px' }} objectFit="cover" layout='fill' />
              </div>
              <div style={{ height: '33vh', position: 'relative', border: '1px solid rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                <Image src={Assemble2} style={{ borderRadius: '7px' }} objectFit="cover" layout='fill' objectPosition={"bottom"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100vh!important',
        width: '100% !important',
        objectFit: 'cover',
        background: 'linear-gradient(0deg, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), radial-gradient(66.14% 80.29% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, #0000 54.34%, #1E1E1E 100%)',
        zIndex: 1
      }}>

      </div>
      <FilmGrain />
    </div>
  </>
)

export default Forward
