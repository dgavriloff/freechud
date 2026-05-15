import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

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
    <section className="hero">
      <button
        type="button"
        className={`hero-video${isPlaying ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <video
          ref={videoRef}
          src="/clips/message.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <span className="hero-video-icon" aria-hidden="true">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="36" height="36">
              <rect x="6" y="5" width="4" height="14" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>

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
