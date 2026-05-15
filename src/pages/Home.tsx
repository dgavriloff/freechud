import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

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
          <h2 className="hero-summary-title">About Chud</h2>
          <p>
            Dalton Eatherly, known online as ChudTheBuilder, is a livestreamer with no prior
            convictions. He films himself in public and calmly calls out people who
            break rules or behave badly. He has been assaulted on camera more than once.
            He keeps streaming. He keeps his voice level.
          </p>
          <p>
            On May 13, 2026, a man walked up to him outside a Tennessee courthouse and
            attacked him. Dalton drew his licensed firearm to defend himself. The state
            has charged him with attempted homicide and set his bond at $1.25 million.
          </p>
          <p>
            We are just regular people trying to bring him home.
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
            Watch the clips
          </Link>
        </div>
      </aside>
    </section>
  )
}
