import { Link } from 'react-router-dom'
import { GIVESENDGO_URL } from '../constants'
import { homeVideos } from '../data/homeVideos'

export default function Home() {
  return (
    <article className="home-page">
      <section className="hero-section">
        <h1 className="hero-heading">Meet Dalton Eatherly</h1>

        <div className="hero">
          <figure className="hero-video-frame">
            <video
              className="hero-video-player"
              src="/clips/message.mp4"
              controls
              playsInline
              preload="metadata"
            />
          </figure>

          <aside className="hero-aside">
            <article className="hero-summary">
              <p>
                Dalton Eatherly, known online as ChudTheBuilder, is a father
                and former construction worker from Tennessee. Before streaming
                became his full-time work, he was living an ordinary life and
                taking construction jobs to support himself and his family.
              </p>
              <p>
                That changed after a public encounter he recorded on his way
                home from work went viral. Dalton says the attention brought
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

      <section className="home-section home-videos">
        <div className="home-section-intro">
          <p className="section-kicker">Dalton as ChudTheBuilder</p>
          <h2 className="home-section-title">
            Dalton livestreaming as ChudTheBuilder.
          </h2>
        </div>

        <div className="home-video-grid">
          {homeVideos.map((video) => (
            <article className="home-video-card" key={video.id}>
              <div className="home-video-media">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="home-video-copy">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
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
