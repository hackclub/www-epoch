import ProgressButton from './progressButton'
import FilmGrain from './filmGrain'

// const timelapseId = "9x00RCb1N7WTpAl6cIN0000Kult00vyzslROW6A1RblWwxM"

const timelapseId = "402YMZJfp6kW02302E3r1RMe013Ub9AqlPwzr4VjD00HO7ME"

import dynamic from 'next/dynamic'

const containerStyle = {
  width: '100%',
  height: '100vh',
  minHeight: '30em',
  overflow: 'auto',
  margin: 0,
  fontFamily: "'Bellefair', serif",
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
}

const supertitleStyle = {
  fontFamily: "'Bellefair', serif",
  fontStyle: 'italic',
  opacity: 0.7
}

const subtitleStyle = {
  fontSize: '2em',
}


export default ({ index, progress, setProgress, github }) => (
  <>
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

      @keyframes blur-in {
        0% {
          filter: blur(50px);
          text-shadow: 0 0 0 0 !important;
        }
        35% {
          filter: blur(5px);
          text-shadow: 0 0 0 0 !important;
        }
        45% {
          filter: blur(20px);
          text-shadow: 0 0 0 0 !important;
        }
        75% {
          filter: blur(10px);
          text-shadow: 0 0 0 0 !important;
        }
        90% {
          filter: blur(5px);
          text-shadow: 0 0 0 0 !important;
        }
        100% {
          filter: blur(0px);
          text-shadow: 0 0 0 0 !important;
        }
      }

      .blur-in {
        animation: blur-in 1s;
      }

      img {
        filter: blur(1px);
      }

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
        font-size: 6em;
        line-height: 1em;
        font-style: italic;
        margin-block-start: 0.2em;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 2px;
        text-shadow: 1px 1px 3px #ddd, 2px 2px 9px #555, 3px 3px 2px #999,
          4px 4px 4px #999, 6px 6px 6px #999, 6px 6px 6px #999,
          0.2em 0.2em 0.25em black;
      }
      @media (min-width: 992px) {
        .title {
          font-size: 10em;
        }
      }

      .banner {
        text-align: center;
        color: white;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: 1em;
        z-index: 2;
      }
    `}</style>
    <div style={containerStyle}>
      <div className="blur-in banner">
        <img
          src="decorative-corner.png"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <img
          src="decorative-corner.png"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'rotate(90deg)',
          }}
        />
        <img
          src="decorative-corner.png"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: 'rotate(180deg)',
          }}
        />
        <img
          src="decorative-corner.png"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            transform: 'rotate(270deg)',
          }}
        />
        <p style={supertitleStyle}>“HACK CLUB PRESENTS”</p>
        <p style={{fontSize: '2.7em', marginBlockEnd: '0.27em', marginBlockStart: '0.27em'}}>An adventure like none other...</p>
        <h1 className="title">
          EPOCH
        </h1>
        <p style={subtitleStyle}>
          December 30th 2022 to January 1st 2023
        </p>
        <ProgressButton
          index={index}
          progress={progress}
          setProgress={setProgress}
        >
          <div className="vertical-float">
            <p style={{ margin: 0, fontSize: '3em' }}>Join us in New Delhi</p>
            <img
              src="decorative-bottom.png"
              style={{ width: '400px', maxWidth: '100%', margin: '0 auto' }}
            />
          </div>
        </ProgressButton>
        <br />
        <br />
      </div>
      <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100vh!important',
              width: '100% !important',
              objectFit: 'cover',
              background: 'linear-gradient(0deg, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), radial-gradient(66.14% 80.29% at 50% 50%, rgba(255, 71, 71, 0.6) 0%, #662A2A 54.34%, #1E1E1E 100%)',
              zIndex: 1
            }}>

      </div>
      <video
            autoPlay
            muted
            loop
            playsInline
            poster={`https://image.mux.com/${timelapseId}/thumbnail.png?width=214&height=121&fit_mode=pad`}
            duration={2000}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100vh!important',
              width: '100% !important',
              objectFit: 'cover',
              zIndex: 0
            }}
        >
          <source src={`https://stream.mux.com/${timelapseId}.m3u8`} />
          <source src={`https://stream.mux.com/${timelapseId}/medium.mp4`} />
        </video>
      <FilmGrain />
    </div>
  </>
)
