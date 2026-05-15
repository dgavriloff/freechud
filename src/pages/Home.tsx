import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <figure className="hero-video">
        <video
          src="/clips/message.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </figure>

      <aside className="hero-aside">
        <article className="hero-summary">
          <h2 className="hero-summary-title">About Chud</h2>
          <p>
            Dalton, known online as Chud, has a rare combination: the courage to speak
            up when people are breaking rules or behaving badly in public, and the calm
            to stay composed while they get loud, hostile, or violent.
          </p>
          <p>
            He is, in plain terms, an American hero &mdash; and the state is now trying
            to bury him for it.
          </p>
        </article>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/story">
            Read his story
          </Link>
          <Link className="btn btn-secondary" to="/support">
            How can I support Chud
          </Link>
          <Link className="btn btn-secondary" to="/clips">
            Isn't he a racist?
          </Link>
        </div>
      </aside>
    </section>
  )
}
