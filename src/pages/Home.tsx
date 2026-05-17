import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { GIVESENDGO_URL } from '../constants'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
    } else {
      v.pause()
    }
  }

  return (
    <article className="home-page">
      <section className="hero-section">
        <h1 className="hero-heading">Meet Dalton Eatherly</h1>

        <div className="hero">
          <button
            type="button"
            className={`hero-video${isPlaying ? ' is-playing' : ''}`}
            onClick={toggle}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <video
              ref={videoRef}
              src="/clips/message.mp4"
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <span className="hero-video-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="56" height="56">
                  <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
                </svg>
              </span>
            )}
          </button>

          <aside className="hero-aside">
            <article className="hero-summary">
              <p>
                Dalton Eatherly, known online as ChudTheBuilder, is a father
                and former construction worker from Tennessee. Before streaming
                became his full-time work, he was living an ordinary life and
                taking construction jobs to support himself and his family.
              </p>
              <p>
                That changed after a public encounter he recorded while buying
                household goods went viral. Dalton says the attention brought
                threats toward him and his family, cost him contracts, and
                eventually pushed him out of regular construction work.
                Streaming became how he documented his life and the
                confrontations that followed.
              </p>
              <p>
                Following the evening where his stalkers found and killed his
                dog, Dalton is now jailed after a disputed courthouse encounter.
                Acting in self-defense; prosecutors charged him with attempted
                criminal homicide and his bond was set at $1.25 million.
              </p>
              <p>
                This site collects the timeline, evidence, and supporter
                argument for bringing him home.
              </p>
            </article>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/story">
                Read the timeline
              </Link>
              <Link className="btn btn-secondary" to="/why-this-matters">
                Why this matters
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section">
        <p className="section-kicker">Explore the case</p>
        <div className="home-link-grid">
          <Link className="home-link-card" to="/story">
            <span>What Happened</span>
            <small>Read the timeline of the week and the courthouse incident.</small>
          </Link>
          <Link className="home-link-card" to="/why-this-matters">
            <span>Why This Matters</span>
            <small>See the broader argument around self-defense, bond, and due process.</small>
          </Link>
          <Link className="home-link-card" to="/support">
            <span>Support</span>
            <small>Donate, share the site, or help improve the case materials.</small>
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-intro">
          <img
            className="home-cta-image"
            src="/images/dalton-dog-field.jpg"
            alt="Dalton playing with his dog in a field"
          />
          <div>
            <p className="section-kicker">What you can do</p>
            <h2 className="home-section-title">Help bring Dalton home.</h2>
          </div>
        </div>
        <div className="home-cta-actions">
          <a className="btn btn-primary" href={GIVESENDGO_URL} target="_blank" rel="noopener noreferrer">
            Donate on GiveSendGo
          </a>
          <a
            className="btn btn-secondary"
            href="https://twitter.com/intent/tweet?text=Dalton%20Eatherly%20is%20being%20held%20on%20a%20%241.25M%20bond%20after%20a%20disputed%20self-defense%20incident.%20Learn%20more%3A%20https%3A%2F%2Ffreechud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share the site
          </a>
        </div>
      </section>
    </article>
  )
}
