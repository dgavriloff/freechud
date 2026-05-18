import { Link } from 'react-router-dom'
import ExternalLink from '../components/ExternalLink'
import { Page, PageTitle } from '../components/Page'
import SectionHeading, { SectionKicker } from '../components/SectionHeading'
import { GIVESENDGO_URL } from '../constants'
import { homeVideos } from '../data/homeVideos'

export default function Home() {
  return (
    <Page className="home-page">
      <section className="hero-section">
        <PageTitle as="h1">MEET DALTON EATHERLY</PageTitle>

        <div className="hero">
          <figure className="hero-video-frame">
            <video
              className="hero-video-player"
              src="/clips/message.mp4"
              controls
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0.001
              }}
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
        <SectionHeading
          className="home-section-intro"
          eyebrow="Dalton as ChudTheBuilder"
          titleClassName="home-section-title"
        >
          Dalton livestreaming as ChudTheBuilder.
        </SectionHeading>

        <div className="home-video-grid">
          {homeVideos.map((video) => (
            <article className="home-video-card" key={video.id}>
              <div className="home-video-media">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 0.001
                  }}
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
        <SectionKicker>Explore the case</SectionKicker>
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
            <SectionHeading
              eyebrow="What you can do"
              titleClassName="home-section-title"
            >
              Help bring Dalton home.
            </SectionHeading>
          </div>
        </div>
        <div className="home-cta-actions">
          <ExternalLink
            className="btn btn-primary support-donate-button"
            href={GIVESENDGO_URL}
          >
            Donate on GiveSendGo
          </ExternalLink>
          <ExternalLink
            className="btn btn-secondary"
            href="https://twitter.com/intent/tweet?text=Dalton%20Eatherly%20is%20being%20held%20on%20a%20%241.25M%20bond%20after%20a%20disputed%20self-defense%20incident.%20Learn%20more%3A%20https%3A%2F%2Ffreechud.com"
          >
            Share the site
          </ExternalLink>
        </div>
      </section>
    </Page>
  )
}
