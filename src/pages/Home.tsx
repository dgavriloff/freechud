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
    </section>
  )
}
