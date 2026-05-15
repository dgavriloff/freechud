import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { clips, type Clip } from '../data/clips'

export default function Clips() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (direction: 1 | -1) => {
    const el = carouselRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.carousel-card')
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <section className="story-intro">
        <h2 className="page-title">Isn't he a racist?</h2>
        <p>
          Short answer: no. People have called him every name in the book, most of them on
          camera, while he stayed calm. Watch the clips and judge for yourself.
        </p>
      </section>

      {clips.length === 0 ? (
        <p className="muted-note">Clips coming soon.</p>
      ) : (
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-nav carousel-nav--prev"
            aria-label="Previous clip"
            onClick={() => scrollByCards(-1)}
          >
            &lsaquo;
          </button>
          <div className="carousel" ref={carouselRef}>
            {clips.map((clip) => (
              <ClipCard key={clip.id} clip={clip} />
            ))}
          </div>
          <button
            type="button"
            className="carousel-nav carousel-nav--next"
            aria-label="Next clip"
            onClick={() => scrollByCards(1)}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </article>
  )
}

function ClipCard({ clip }: { clip: Clip }) {
  const embedSrc = clip.youtubeId
    ? `https://www.youtube.com/embed/${clip.youtubeId}`
    : clip.iframeUrl

  return (
    <div className="carousel-card">
      <div className="carousel-card-media">
        {clip.src ? (
          <video src={clip.src} poster={clip.poster} controls preload="metadata" />
        ) : embedSrc ? (
          <iframe
            src={embedSrc}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : null}
      </div>
      <h3 className="carousel-card-title">{clip.title}</h3>
      {clip.description && <p className="carousel-card-desc">{clip.description}</p>}
    </div>
  )
}
