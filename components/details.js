import ProgressButton from './progressButton'
import FilmGrain from './filmGrain'
import Assemble from '../public/assemble.jpg'
import Assemble2 from '../public/assemble2.jpg'
import Assemble3 from '../public/assemble3.jpg'
import Assemble4 from '../public/assemble4.jpg'
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
}


const Details = () => (
  <>
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

      p,
      h1 {
        text-shadow: 0 0 0.1rem #eee;
        color: white;
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

      .card {
        padding: 1em;
        width: 100%;
        background-color: black;
        border-radius: 1em;
      }

      .card-nobackground {
        padding: 1em;
        width: 100%;
      }

      .card p, .card-nobackground p {
        margin: 0
      }

      p.section {
        font-weight: 700;
      }
    `}</style>
    <div style={containerStyle}>
      <div className="blur-in banner">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 6em)' }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img
                src="decorative-corner.png"
                style={{ position: 'absolute', top: '-3.2em', left: '-3.2em', opacity: 0.3 }}
              />
              <h1 className="title">
                Details
              </h1>
              <div style={{ height: '50vh', display: 'flex', flexDirection: 'column' }}>
                <div className="card" style={{ marginBottom: '0.5em' }}>
                  <p className="section">Date</p>
                  <p>30 December 2022 (noon) to 1 January 2023 (noon)</p>
                </div>
                <div className="card" style={{ marginTop: '0.5em', flexGrow: '1' }}>
                  <p className="section">Location</p>
                  <p>To be confirmed. Watch this space!</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 6em)', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-nobackground" style={{ marginBottom: '0.5em' }}>
                <p className="section">Travel stipends</p>
                <p>We're offering a limited number of stipends to cover travel expenses. If you need support with your travel stipend, please indicate this on your registration form and we will consider you for a travel stipend.</p>
              </div>
              <div className="card-nobackground" style={{ marginVertical: '0.5em' }}>
                <p className="section">Eligibility</p>
                <p>All high-school & upper-middle-school aged students are welcome to come! You don't have to be a member of the Hack Club community or be a Hack Club leader.</p>
              </div>
              <div className="card-nobackground" style={{ marginTop: '0.5em' }}>
                <p className="section">Eligibility</p>
                <p>We require all participants to be vaccinated against COVID-19 or to have a medical exemption and will be providing all participants with N95 masks and rapid tests. We'll also be performing anonymous contact tracing and supporting any participant who tests positive with isolation.</p>
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

export default Details
