import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { clips, type Clip } from '../data/clips'

export default function Clips() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <section className="story-intro">
        <h2 className="page-title">Isn't he a racist?</h2>
        <p>
          No. People have called Dalton every name in the book, most of it on his own
          livestream, while he stayed calm. He has been screamed at, threatened, and
          assaulted on camera. He has not returned a single insult.
        </p>
        <p>
          Watch the clips and decide for yourself.
        </p>
      </section>

      {clips.length === 0 ? (
        <p className="muted-note">Clips coming soon.</p>
      ) : (
        <div className="clip-list">
          {clips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      )}
    </article>
  )
}

function ClipCard({ clip }: { clip: Clip }) {
  const localRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const embedSrc = clip.youtubeId
    ? `https://www.youtube.com/embed/${clip.youtubeId}`
    : clip.iframeUrl

  const toggle = () => {
    const v = localRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
    } else {
      v.pause()
    }
  }

  return (
    <div className="carousel-card">
      {clip.src ? (
        <button
          type="button"
          className="carousel-card-media is-toggle"
          onClick={toggle}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <video
            ref={localRef}
            src={clip.src}
            poster={clip.poster}
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
      ) : embedSrc ? (
        <div className="carousel-card-media">
          <iframe
            src={embedSrc}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : null}
      <h3 className="carousel-card-title">{clip.title}</h3>
      {clip.description && <p className="carousel-card-desc">{clip.description}</p>}
    </div>
  )
}
